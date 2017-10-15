var expect = require('chai').expect;

var projects = require('../stubs/projects');

function getNextProject(id) {
	var nextProjectId;
	nextProjectId = (parseInt(id) == projects.length-1) ? 0 : parseInt(id)+1;
	return nextProjectId;
}

describe('getNextProject test', () => {
	it('should return the next project id', (done) => {
		expect(getNextProject(projects.length-1)).to.equal(0);
		expect(getNextProject(0)).to.equal(1);
		done();
	});
});