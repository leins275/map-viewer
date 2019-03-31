/*
 *  Messages
 *
 * This contains all the text
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  lang: {
    id: `lang`,
    defaultMessage: 'Language'
  },
  about: {
    id: `about`,
    defaultMessage: 'About'
  },
  aboutText: {
    id: `about.text`,
    defaultMessage:
      'MapViewer is the top-of-the-line app to work with maps uploaded in XML-format.' +
      'The application runs on most desktop browsers (ex. Google Chrome, Microsoft Edge, Opera, e.t.c.) and mobile phones. '
  },
  feedback: {
    id: `feedback`,
    defaultMessage:
      'If you have any questions or problems, please, report them at leins275@gmail.com'
  },
  copyright: {
    id: `copyright`,
    defaultMessage: '(c) Designed by MapViewer, Saint-Petersburg, Russia, 2019'
  },
  close: {
    id: `close`,
    defaultMessage: 'Close'
  },
  chooseMap: {
    id: `choose.map`,
    defaultMessage: 'Choose Map  '
  },
  map1: {
    id: `map1`,
    defaultMessage: 'Map1'
  },
  map2: {
    id: `map2`,
    defaultMessage: 'Map2'
  },
  map3: {
    id: `map3`,
    defaultMessage: 'Map3'
  },
  uploadMap: {
    id: `upload.map`,
    defaultMessage: 'Upload Map'
  },
  licenseMessage: {
    id: `license.message`,
    defaultMessage: 'This project is licensed under the MIT license.'
  },
  authorMessage: {
    id: `author.message`,
    defaultMessage: `
      Made with love by {author}.`
  },
  Info: {
    id: `info`,
    defaultMessage: 'Map data:'
  },
  Flags: {
    id: `flags`,
    defaultMessage: 'Output:'
  },
  Streets: {
    id: `checkbox.streets`,
    defaultMessage: 'streets'
  },
  Houses: {
    id: `checkbox.houses`,
    defaultMessage: 'houses'
  },
  Water: {
    id: `checkbox.water`,
    defaultMessage: 'water objects'
  },
  Up: {
    id: `up`,
    defaultMessage: 'up'
  },
  Down: {
    id: `down`,
    defaultMessage: 'down'
  },
  Left: {
    id: `left`,
    defaultMessage: 'left'
  },
  Right: {
    id: `right`,
    defaultMessage: 'right'
  }
});
