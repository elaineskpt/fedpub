import { terser } from 'rollup-plugin-terser';

export default {
    input: './scripts/main.js',
    output: {
        file: './bench/dist/app.min.js',
        format: 'iife',
        sourcemap: false,
    },
    plugins: [
        terser(),
    ],
};