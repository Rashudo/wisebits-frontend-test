const sveltePreprocess = require('svelte-preprocess');

const production = process.env.NODE_WATCH === 'production';

const preprocess = sveltePreprocess({
  typescript: {
    tsconfigFile: './tsconfig.json'
  },
  scss: {
    includePaths: ['src'],
  },
  postcss: {
    plugins: [
      require('autoprefixer'),
    ],
  }
});

module.exports = {
  dev: !production,
  preprocess
};