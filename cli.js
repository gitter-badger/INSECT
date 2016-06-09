'use strict';
var meow = require('meow');
var insect = require('./');

var cli = meow(`
	Usage
	  $ insect <string to anylyse>
 
	Options
	  
`
);

insect(cli.input[0], cli.flags);