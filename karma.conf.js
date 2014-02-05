module.exports = function(config){
    config.set({
    files : [
      'lib/bower_components/angular/angular.js',
      'app/js/module.js',
      'app/js/controllers.js',
      'lib/bower_components/angular-mocks/angular-mocks.js',
      'tests/unit/**/*.js',
    ],
    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
})}
