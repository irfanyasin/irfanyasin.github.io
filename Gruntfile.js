module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: ['_stylesheets/basscss.css', '_stylesheets/main.css', '_stylesheets/solarized-dark.css'],
                dest: 'css/style.css'
            }
        },
        cssmin: {
            minify: {
                files: {
                    'css/style.min.css': ['<%= concat.css.dest %>']
                }
            }
        },
        watch: {
            files: ['_config.yml', 'Gruntfile.js', 'Gemfile', 'index.html', '404.html', '_includes/**/*.html', '_layouts/**/*.html', '_posts/**/*.md', '_stylesheets/**/*.css', 'images/**/*'],
            options: {
                atBegin: true
            },
            tasks: "default"
        }
    });

    // Load grunt tasks from NPM packages
    require("load-grunt-tasks")(grunt);

    grunt.registerTask('default', ['concat', 'cssmin']);
};