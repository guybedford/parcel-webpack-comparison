# Parcel / Webpack Comparison

## Preliminary results

101kb using new parcel tree shaker (React, Lodash), time 7.62s (with caching)
501kb using old parcel build (React, Lodash), time 2s (with caching)
What about webpack? 198kb (React, Lodash), time 15.268s

USING ES6 LIBS (React, Lodash-es)

compile-webpack:        198kb  | 15.268s
compile-parcel:         101kb  | 5.27s
compile-parcel-basic:   501kb  | 3.08s

PLAIN LODASH (React, Lodash)

compile-webpack:        170kb
compile-parcel:         192kb
compile-parcel-basic:   192kb

THREE.JS APP

compile-webpack:        543kb
compile-parcel:         518kb
compile-parcel-basic:   535kb
