# Parcel / Webpack Comparison

Comparing the bundle sizes of Webpack and Parcel, using Parcel's new tree shaking mode. Non-shaken Parcel bundles are
included as a point of comparison.

## Preliminary results

tl;dr - Parcel can create smaller bundles when using purely ES6 module / CommonJS module code. Other dependencies might
be better optimized by Webpack.

**Using ES6 Libs** (Lodash-es + React)

| Bundler                | Size          | Time   |
| ---------------------- |:-------------:| ------:|
| Webpack                | 198kb         | 15.26s |
| Parcel + tree shaking  | 101kb         | 5.27s |
| Parcel (old)           | 501kb         | 3.08s |


**Using Non-ES6 Libs** (plain Lodash + React)

| Bundler                | Size          |
| ---------------------- |:-------------:|
| Webpack                | 170kb         |
| Parcel + tree shaking  | 192kb         |
| Parcel (old)           | 192kb         |

**Three.js app**

| Bundler                | Size          |
| ---------------------- |:-------------:|
| Webpack                | 543kb         |
| Parcel + tree shaking  | 518kb         |
| Parcel (old)           | 535kb         |

## Reproducing these results

You can use the NPM scripts defined in package.json to run each build. Compiled bundles will land in a `dist/` folder.
