var expect = require('chai').expect;

var projects = require('../stubs/projects');

function getNextProject(id) {
	var nextProjectId;
	nextProjectId = (parseInt(id) == projects.length-1) ? 0 : parseInt(id)+1;
	return nextProjectId;

}

describe('Our first test', () => {
	it('should return the next project id', (done) => {
		expect(getNextProject(2)).to.equal(0);
		done();
	})
});