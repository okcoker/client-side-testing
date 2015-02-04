module.exports = function(grunt) {
    'use strict';


    // Load the plugins that provide the tasks we specified in package.json
    require('load-grunt-tasks')(grunt);


    ////////////////////////
    // Task Configuration //
    ////////////////////////
    grunt.initConfig({
        blanket_mocha: {
            options: {
                run: true,
                reporter: 'Min',
                threshold: 70
            },
            files: {
                src: 'test/*.html'
            }
        },

        karma : {
            options: {
                // base path that will be used to resolve all patterns (eg. files, exclude)
                basePath: '',


                // frameworks to use
                // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
                frameworks: ['mocha'],

                // list of files / patterns to load in the browser
                files: [],

                // list of files to exclude
                exclude: [
                ],

                // preprocess matching files before serving them to the browser
                // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
                preprocessors: {
                    'test/*.html': ['html2js'],
                    'js/*.js': ['coverage']
                },

                // test results reporter to use
                // possible values: 'dots', 'progress'
                // available reporters: https://npmjs.org/browse/keyword/karma-reporter
                reporters: ['progress', 'coverage'],

                // web server port
                port: 9877,

                // enable / disable colors in the output (reporters and logs)
                colors: true,

                // enable / disable watching file and executing tests whenever any file changes
                autoWatch: true,

                // start these browsers
                // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
                browsers: ['Chrome', 'Firefox', 'PhantomJS'],

                // Continuous Integration mode
                // if true, Karma captures browsers, runs the tests and exits
                singleRun: false,

                coverageReporter: {
                    dir: 'tests/js/coverage',
                    instrumenter: {},
                    reporters: [
                        // reporters not supporting the `file` property
                        { type: 'html', subdir: 'report-html' },
                        { type: 'lcov', subdir: 'report-lcov' },
                        // reporters supporting the `file` property, use `subdir` to directly
                        // output them in the `dir` directory
                        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' }
                    ]
                }
            }
        }
    });

    ///////////
    // Tasks //
    ///////////

    grunt.registerTask('test', []);
    grunt.registerTask('mocha', ['blanket_mocha']);
    grunt.registerTask('default', ['test']);
};
