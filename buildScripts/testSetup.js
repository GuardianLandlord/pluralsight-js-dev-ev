// This file isn't transpiled, so much use CommonJS and ES5

// Register babel to transpile before test run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
