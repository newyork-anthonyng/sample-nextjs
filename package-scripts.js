module.exports = {
  scripts: {
    default: 'next start',
    build: 'next build',
    dev: 'next dev',
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
