/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_'
  },
  plugins: [
    ['@snowpack/plugin-svelte'],
    ['@snowpack/plugin-typescript'],
    ['@snowpack/plugin-webpack'],
    ['@snowpack/plugin-dotenv'],
    ['snowpack-plugin-less'],
  ],
  packageOptions: {
    "packageLookupFields": ["svelte", "module", "main"]
  },
  devOptions: {
    port: 5000
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    '@': '/src',
    '@containers': './src/containers',
    '@lib': './src/lib',
    '@stores': './src/stores',
    '@styles': './src/assets/styles',
  },
  routes: [
    { match: 'routes', src: '.*', dest: '/index.html' },
  ]
};
