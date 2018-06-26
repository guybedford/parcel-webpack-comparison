module.exports = {
    entry: {
        basic: './src/basic.tsx',
        plainLodash: './src/plainLodash.tsx',
        threeApp: './src/threeApp.tsx'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        path: __dirname + '/dist'
    },
    plugins: []
};