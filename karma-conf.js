module.exports = function(config) {
    config.set({

        files: [
            './lib/angular.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './app/**/*.js',
            './test/**/*.test.js'
        ],

        exclude: ['test/karma-conf.js'],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
        ]

    })
}