'use strict';
describe('insect', function () {
  it('should return "Hello"', function (done) {
		var insect = require('../index.js');
		var flags = { s: 'Hello', string: 'Hello' };
		insect(flags);
    done();
		process.exit();
  });
});
