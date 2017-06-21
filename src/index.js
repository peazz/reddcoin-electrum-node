/*
  Dependancies
 */
var Promise = require('bluebird');
var glob = require('glob');
var path = require('path');

/*
  API Object
 */
var Electrum = {}

/*
  Loat Core
 */
glob.sync('classes/*.js', {
    root: __dirname
}).forEach(function(file){
    var fileName = file.substr(file.indexOf("/") + 1).replace(".js","");
    // file name is the class name
    Electrum[fileName] = require('./' + file);
});
