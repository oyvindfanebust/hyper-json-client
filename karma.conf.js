module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'browserify'],
    preprocessors: {
        'test/*' : ['browserify']
    },
    browserify: {
        watch: true
    },
    files: [
      'test/*'
    ],
    exclude: [
      
    ],
    reporters: ['progress', 'growl'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    captureTimeout: 60000,
    singleRun: false
  });
};
