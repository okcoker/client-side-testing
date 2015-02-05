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
                configFile: 'karma.conf.js',

                // These files are probably going to be included in
                // all our tests that we'd write. The files object in
                // each individual karma target are added to these.
                files: [
                    'node_modules/chai/chai.js',
                    'node_modules/sinon-chai/lib/sinon-chai.js',
                    'node_modules/sinon/pkg/sinon.js',

                    // In our case, the test and src files are the
                    // same for dev and prod
                    'js/calculator.js',
                    'test/calculator-test.js',

                    // html2js preprocessor takes care of this
                    'test/index.html'
                ]
            },

            dev: {
                browsers: ['Chrome', 'Firefox', 'PhantomJS']
            },

            // run tests once in PhantomJS browser.
            prod: {
                singleRun: true,
                browsers: ['PhantomJS']
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
