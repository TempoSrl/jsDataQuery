// Generated on 2014-03-27 using generator-angular-fullstack 1.2.7
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'
/*globals initConfig, appPath */
/*jshint camelcase: false */


module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),

            yuidoc: {
                compile: {
                    name: '<%= pkg.name %>',
                    linkNatives: "true",
                    description: '<%= pkg.description %>',
                    version: '<%= pkg.version %>',
                    url: '<%= pkg.homepage %>',
                    options: {
                        paths: ['./src'],
                        outdir: 'doc'
                    }
                }
            },

            watch: {
                files: ['src/*.js'],
                tasks: ['karma:unit:run'],
                options: {
                    livereload: true
                }
            },

            // Test settings
            karma: {
                unit: {
                    configFile: 'test/karma.conf.js',
                    autoWatch: false,
                    singleRun: true
                },
                unit_auto: {
                    configFile: 'test/karma.conf.js',
                    autoWatch: true,
                    singleRun: false
                }
            }


        }
    );

    grunt.registerTask('test', [
        'karma:unit'
    ]);

    grunt.registerTask('default', [
        'karma:unit'
    ]);
};
