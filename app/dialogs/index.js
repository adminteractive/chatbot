var fs = require('fs');

fs.readdirSync(__dirname).forEach(function(file) {
  console.log(file);
});

// @todo autoload all dialogs recursively.