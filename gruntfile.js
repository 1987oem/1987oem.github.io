module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: ['js/src/*.js'],
                // the location of the resulting JS file
                dest: 'js/script.main.js'
            }
        },
        uglify: {
            dist: {
                // the files to uglify
                src: ['js/script.main.js'],
                // the location of the resulting JS file
                dest: 'js/script.main.min.js'
            }
        },
        sass: {
            dist: {
                files: {
                    'css/style_desktop.css': 'css/src/style_desktop.scss',
                    'css/style_tablet.css': 'css/src/style_tablet.scss',
                    'css/style_mobile.css': 'css/src/style_mobile.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['concat', 'uglify', 'sass']);

};