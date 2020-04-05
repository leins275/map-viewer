import {
  PickHouses,
  PickStreets,
  PickWater
} from '../../containers/Parsing/DataFilter';
import data from '../data/data3';

test('filter water', () => {
  let water_correct = {
    items: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4056963, 57.0271721],
            [24.4050155, 57.0271287],
            [24.4042956, 57.0273806],
            [24.403676, 57.0276667],
            [24.4034478, 57.0280402],
            [24.4035972, 57.0283949],
            [24.4039625, 57.0287338],
            [24.4042677, 57.0289554],
            [24.4045853, 57.0290088],
            [24.4049372, 57.0289857],
            [24.405324, 57.028897],
            [24.4055606, 57.0287884],
            [24.4057751, 57.0285779],
            [24.4061641, 57.0279931],
            [24.4066109, 57.0277289],
            [24.4072155, 57.0277849],
            [24.4081563, 57.0279997],
            [24.408756, 57.0282146],
            [24.4090166, 57.0282972],
            [24.4094204, 57.0282434],
            [24.4094557, 57.0278947],
            [24.4092754, 57.0275724],
            [24.4091107, 57.0272852],
            [24.4088136, 57.0270174],
            [24.4082342, 57.0267255],
            [24.4070535, 57.0266846],
            [24.4062681, 57.0268595],
            [24.4059106, 57.0271087],
            [24.4056963, 57.0271721]
          ]
        },
        properties: { name: 'Lake1', water: 'lake', natural: 'water' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { name: 'Lake2', water: 'lake', natural: 'water' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              [
                [24.3098637, 57.0779267],
                [24.3099386, 57.0778551],
                [24.3100068, 57.0777899],
                [24.3107966, 57.0780635],
                [24.3107143, 57.0781293],
                [24.3106288, 57.0781977],
                [24.3098637, 57.0779267]
              ]
            ]
          ]
        },
        properties: { natural: 'water' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              [
                [25.3098637, 57.0779267],
                [25.3099386, 57.0778551],
                [24.3100068, 57.0777899],
                [24.3107966, 57.0780635],
                [24.3107143, 57.0781293],
                [24.3106288, 57.0781977],
                [24.3098637, 57.0779267]
              ]
            ]
          ]
        },
        properties: { natural: 'water' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              [
                [26.3098637, 57.0779267],
                [26.3099386, 57.0778551],
                [25.3100068, 57.0777899],
                [24.3107966, 57.0780635],
                [24.3107143, 57.0781293],
                [24.3106288, 57.0781977],
                [24.3098637, 57.0779267]
              ]
            ]
          ]
        },
        properties: { natural: 'water' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'canal' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'stream' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'ditch' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'river' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'drain' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'riverbank' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'dam' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'rapids' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'waterfall' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'drystream' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'wadi' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'dock' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'soakhole' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'milestone' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'boatyard' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'brook' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'yes' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'fairway' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'fuel' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'pond' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'lock' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'null' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'flow_control' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'connector' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 57.0367435]
          ]
        },
        properties: { natural: 'water', waterway: 'reservoir' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 58.0367435]
          ]
        },
        properties: { waterway: 'river' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [24.4043595, 57.0367435],
            [24.405609, 57.0362654],
            [24.4060664, 57.0359502],
            [24.4066551, 57.0351522],
            [24.4072949, 57.034754],
            [24.4071286, 57.034249],
            [24.4067445, 57.0341615],
            [24.4059785, 57.0343962],
            [24.4053862, 57.0348141],
            [24.4049903, 57.0354189],
            [24.4046052, 57.035907],
            [24.4039271, 57.0365888],
            [24.4043595, 58.0367435]
          ]
        },
        properties: { waterway: 'riverbank' }
      }
    ]
  };

  let streets_correct = { items: [] };
  let houses_correct = { items: [] };

  let water = PickWater(data);
  let streets = PickStreets(data);
  let houses = PickHouses(data);

  expect(water).toEqual(water_correct);
  expect(streets).toEqual(streets_correct);
  expect(houses).toEqual(houses_correct);
});