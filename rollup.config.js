import path from 'path';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import alias from 'rollup-plugin-alias';
import { terser } from 'rollup-plugin-terser';

export default [
	{
		input: 'src/basic.tsx',
		plugins: [
			typescript({
				include: ['src/*.tsx'],
				typescript: require('typescript')
			}),
			alias({
				react: path.resolve('node_modules/react/cjs/react.production.min.js'),
				'react-dom': path.resolve('node_modules/react-dom/cjs/react-dom.production.min.js')
			}),
			resolve({ browser: true }),
			commonjs(),
			terser({
				compress: {
					global_defs: {
						'process.env.NODE_ENV': '"production"'
					},
				},
				mangle: true
			})
		],
		output: {
			file: 'dist/basic.js',
			format: 'es'
		}
	},

	{
		input: 'src/plainLodash.tsx',
		plugins: [
			typescript({
				include: ['src/*.tsx'],
				typescript: require('typescript')
			}),
			alias({
				react: path.resolve('node_modules/react/cjs/react.production.min.js'),
				'react-dom': path.resolve('node_modules/react-dom/cjs/react-dom.production.min.js')
			}),
			resolve({ browser: true }),
			commonjs({
				namedExports: {
					'lodash': ['deburr']
				}
			}),
			terser({
				compress: {
					global_defs: {
						'process.env.NODE_ENV': '"production"'
					},
				},
				mangle: true
			})
		],
		output: {
			file: 'dist/plainLodash.js',
			format: 'es'
		}
	},

	{
		input: 'src/threeApp.tsx',
		plugins: [
			typescript({
				typescript: require('typescript')
			}),
			alias({
				three: path.resolve('node_modules/three/build/three.module.js')
			}),
			resolve({ browser: true }),
			commonjs(),
			terser({
				compress: {
					global_defs: {
						'process.env.NODE_ENV': '"production"'
					},
				},
				mangle: true
			})
		],
		output: {
			file: 'dist/threeApp.js',
			format: 'es'
		}
	}
];
