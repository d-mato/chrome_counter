module.exports = (grunt) ->
  grunt.initConfig
    coffee:
      compile:
        files:
         'dist/background.js': ['src/background.coffee'],
         'dist/script.js': ['src/script.coffee'],

  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.registerTask('default', 'coffee')
