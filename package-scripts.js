module.exports = {
  scripts: {
    default: 'next start',
    build: 'next build',
    dev: 'node server.js',
    flow: {
      script: 'flow',
      description: 'Use flow type-checking',
    },
    test: {
      default: 'jest',
      watch: 'jest --watch',
    }
  },
};
