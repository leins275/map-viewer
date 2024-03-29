import isCorrect from '../isCorrect';
import createTrianglesFromIndices from '../triangles';
import earcutGetAll from '../../containers/Triangulation/getAll';

test('triangulate 10', () => {
  const geometry = [
    //polygon
    [[0, 0], [0, 50], [30, 20], [50, 50], [70, 20], [100, 50], [100, 0]]
  ];
  const incorrectResult = [
    [[0, 0], [0, 50], [30, 20]],
    [[0, 50], [50, 50], [70, 20]],
    [[70, 20], [100, 50], [100, 0]],
    [[30, 20], [70, 20], [100, 0]],
    [[0, 0], [30, 20], [100, 0]]
  ];

  //get array of indices of vertices in triangles
  let vertices = geometry[0];

  //add results of triangulation (in indices) here
  let ind = earcutGetAll(geometry);

  //create triangles in coords from array of indices
  let results = [];
  for (let i = 0; i < ind.length; i++) {
    results.push(createTrianglesFromIndices(ind[i], vertices));
  }
  //console.log(triangles);

  // check if the triangulation is correct comparing the preset correct result
  // with all triangulations given by algorithm
  expect(isCorrect(incorrectResult, results)).toEqual(false);
});
