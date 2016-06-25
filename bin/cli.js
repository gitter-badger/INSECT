'use strict';
const meow = require('meow');
const insect = require('../index.js');

const cli = meow(`
	Usage
	  $ insect-tool <flag> <input>

	Options
	  -s, --string  Take input from a string
	  -f, --file  Take input from a file

	Examples
	  $ insect--tool hello -s
	  Nothing wrong!

	  $ insect-tool "He was stupid" -s
	  Changed to "They were foolish"
`, {
	alias: {
		s: 'string',
		f: 'file'
	}
});
insect(cli.flags);
