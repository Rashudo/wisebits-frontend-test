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
    ['@snowpack/plugin-dotenv']
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
    '@components': './src/components',
    '@containers': './src/components/containers',
    '@lib': './src/lib',
    '@stores': './src/stores',
  },
  routes: [
    { match: 'routes', src: '.*', dest: '/index.html' },
  ]
};
