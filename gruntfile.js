module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        //Open the package.json
        pkg: grunt.file.readJSON('package.json'),

        //The Concat Task
        concat: {
          js: {
            src:['resources/script.js'],
            dest:'build/scripts.js'
        },
        css: {
            src:['resources/main.css'],
            dest:'build/styles.css'
        }
        },

        //Task for js Minification
        uglify: {

        },
        less: {
          development: {
            options: {
                paths: ['resources']
              },
            files: {
                "resources/main.less" : "resources/main.css" 
            }
        }
        },

        //Task for change tracker
        watch:{
          scripts: {
            files: ['**/*.js','**/*.css','index.html'],
            tasks: ['less'],
            options: {
              spawn: false,
            },
          },
        },

        
        clean: {
          folder: ['build']
        },
        
        cssmin: {

        },
        copy: {
          main: {
            files: [
              {expand: true, src: ['resources/*'], dest: 'dest/', filter: 'isFile'},
            ],
          },
        },
        autoprefixer: {
          options: {
            browsers: ['last 2 versions', 'chrome']
        },
          },
          processhtml: {
            build: {
              files: {
                  'index.html' : ['index.html']
              }
          }
        },
        browserSync: {
          dev: {
            bsFiles: {
                src : [
                    'resources/*.css',
                    'index.html'
                ]
            },
            options: {
                watchTask: true,
                server: './'
            }
        }
    }
        
    });
    //NPMTASK
    grunt.loadNpmTasks('grunt-contrib-concat'); //klasörleme
    grunt.loadNpmTasks('grunt-contrib-less'); //less to css
    grunt.loadNpmTasks('grunt-contrib-watch'); //değişiklik isteme
    grunt.loadNpmTasks('grunt-contrib-clean'); //silme
    grunt.loadNpmTasks('grunt-contrib-copy'); //kopyalama
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-cssmin');// Minify CSS
    grunt.registerTask('default', ['browserSync', 'watch']);
};
