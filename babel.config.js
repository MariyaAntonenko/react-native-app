module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
};
// const path = require('path');
// const pak = require('./package.json');
//
// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     [
//       'module-resolver',
//       {
//         extensions: ['.tsx', '.ts', '.js', '.json'],
//         alias: {
//           [pak.name]: './',
//         },
//       },
//     ],
//     'react-native-reanimated/plugin',
//   ],
// };
