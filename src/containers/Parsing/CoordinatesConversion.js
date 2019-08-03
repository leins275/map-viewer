import { status, GetFileCounts } from './Handle';

/*
 * @desc finds bounds of map's part present in given json
 * @param json_data - part of map stored as json file
 * @return arr_bounds - array of bounds [left(west), right(east), up(north), down(south)]
 */
function GetBoundsOneFile(json_data) {
  let arr_bounds = new Array(4);
  arr_bounds[0] = json_data.items[0].coordinates[0][0];
  arr_bounds[1] = arr_bounds[0];
  arr_bounds[2] = json_data.items[0].coordinates[0][1];
  arr_bounds[3] = arr_bounds[2];

  for (let j = 0; j < json_data.items.length; j++) {
    for (let k = 0; k < json_data.items[j].coordinates.length; k++) {
      if (json_data.items[j].coordinates[k][0] < arr_bounds[0])
        // Update left bound
        arr_bounds[0] = json_data.items[j].coordinates[k][0];
      if (json_data.items[j].coordinates[k][0] > arr_bounds[1])
        // Update right bound
        arr_bounds[1] = json_data.items[j].coordinates[k][0];
      if (json_data.items[j].coordinates[k][1] > arr_bounds[2])
        // Update upper bound
        arr_bounds[2] = json_data.items[j].coordinates[k][1];
      if (json_data.items[j].coordinates[k][1] < arr_bounds[3])
        // Update lower bound
        arr_bounds[3] = json_data.items[j].coordinates[k][1];
    }
  }
  return arr_bounds;
}

/*
 * @desc finds map's bounds
 * @param arr_of_file_names - ["streets", "houses", "water"]
 * @return arr_bounds - array of bounds [left(west), right(east), up(north), down(south)]
 */
async function GetBounds(arr_of_file_names) {
  let arr_bounds = new Array(4);
  const file_counts = GetFileCounts();
  for (let i = 0; i < file_counts.length; i++) {
    for (let j = 1; j <= file_counts[i]; j++) {
      let doc = document.getElementById(arr_of_file_names[i] + j + 'ProcFile');
      if (doc !== null) {
        fetch(doc.href)
          .then(status)
          .then(function(data) {
            const json_data = JSON.parse(
              String.fromCharCode.apply(null, new Uint8Array(data))
            );
            let arr_bounds_temp = GetBoundsOneFile(json_data);
            if (arr_bounds[0] === 0) {
              // Initializing arr_bounds with first file's bounds
              arr_bounds[0] = arr_bounds_temp[0];
              arr_bounds[1] = arr_bounds_temp[1];
              arr_bounds[2] = arr_bounds_temp[2];
              arr_bounds[3] = arr_bounds_temp[3];
            }
            if (arr_bounds_temp[0] < arr_bounds[0])
              // Update left bound
              arr_bounds[0] = arr_bounds_temp[0];
            if (arr_bounds_temp[1] > arr_bounds[1])
              // Update right bound
              arr_bounds[1] = arr_bounds_temp[1];
            if (arr_bounds_temp[2] > arr_bounds[2])
              // Update upper bound
              arr_bounds[2] = arr_bounds_temp[2];
            if (arr_bounds_temp[3] < arr_bounds[3])
              // Update lower bound
              arr_bounds[3] = arr_bounds_temp[3];
          })
          .catch(function(err) {
            alert(err);
          });
      }
    }
  }
  if (arr_bounds[0] === undefined) {
    arr_bounds[0] = 0;
    arr_bounds[1] = 0;
    arr_bounds[2] = 0;
    arr_bounds[3] = 0;
  }
  return arr_bounds;
}

/*
 * @desc converts coordinates of map's part present in given json into unsigned int format
 *       with left and lower bounds as [0, 0] coordinate and scale 1.0000 degree = 10000
 * @param json_data - part of map stored as json file
 * @param left - left map's bound
 * @param right - right map's bound
 * @param up - upper map's bound
 * @param down - lower map's bound
 * @return json_data - part of map with converted coordinates stored as json file
 */
function ConvertCoordinatesOneFile(json_data, left, right, up, down) {
  const scale = 10000;
  const width = (right - left) * scale,
    height = (up - down) * scale;
  for (let j = 0; j < json_data.items.length; j++) {
    if (json_data.items[j].type === 'MultiPolygon') {
      // polygon coordinates itself
      for (let k = 0; k < json_data.items[j].coordinates[0].length; k++) {
        json_data.items[j].coordinates[0][k][0] = Math.round(
          ((json_data.items[j].coordinates[0][k][0] - left) / (right - left)) *
            width
        );
        json_data.items[j].coordinates[0][k][1] = Math.round(
          ((json_data.items[j].coordinates[0][k][1] - down) / (up - down)) *
            height
        );
      }
      if (json_data.items[j].coordinates.length > 1) {
        // massive of holes processing
        for (let i = 0; i < json_data.items[j].coordinates[1].length; i++) {
          for (
            let k = 0;
            k < json_data.items[j].coordinates[1][i].length;
            k++
          ) {
            json_data.items[j].coordinates[1][i][k][0] = Math.round(
              ((json_data.items[j].coordinates[1][i][k][0] - left) /
                (right - left)) *
                width
            );
            json_data.items[j].coordinates[1][i][k][1] = Math.round(
              ((json_data.items[j].coordinates[1][i][k][1] - down) /
                (up - down)) *
                height
            );
          }
        }
      }
    } else {
      for (let k = 0; k < json_data.items[j].coordinates.length; k++) {
        json_data.items[j].coordinates[k][0] = Math.round(
          ((json_data.items[j].coordinates[k][0] - left) / (right - left)) *
            width
        );
        json_data.items[j].coordinates[k][1] = Math.round(
          ((json_data.items[j].coordinates[k][1] - down) / (up - down)) * height
        );
      }
    }
  }
  return json_data;
}

/*
 * @desc converts map's coordinates into unsigned int format
 */
async function ConvertCoordinates() {
  const file_counts = GetFileCounts(),
    arr_of_file_names = ['streets', 'houses', 'water'];
  await GetBounds(arr_of_file_names)
    .then(async function(arr_bounds) {
      for (let i = 0; i < file_counts.length; i++) {
        for (let j = 1; j <= file_counts[i]; j++) {
          let doc = document.getElementById(
            arr_of_file_names[i] + j + 'ProcFile'
          );
          if (doc !== null) {
            await fetch(doc.href)
              .then(status)
              .then(function(data) {
                window.URL.revokeObjectURL(doc.href);
                let json_data = JSON.parse(
                  String.fromCharCode.apply(null, new Uint8Array(data))
                );
                json_data = ConvertCoordinatesOneFile(
                  json_data,
                  arr_bounds[0],
                  arr_bounds[1],
                  arr_bounds[2],
                  arr_bounds[3]
                );
                const blob = new Blob([JSON.stringify(json_data)], {
                    type: 'text/json'
                  }),
                  f = new File([blob], doc.download, { type: 'text/json' });
                doc.href = window.URL.createObjectURL(f);
              })
              .catch(function(err) {
                alert(err);
              });
          }
        }
      }
    })
    .catch(function(err) {
      alert(err);
    });
}

export { ConvertCoordinates };
