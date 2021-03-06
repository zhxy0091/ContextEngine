// @version: $$Id: testCommon.js 783 2016-05-13 18:55:54Z cxh $$
// Run the test/TestComposite code in accessors/web/test/TestComposite.js
// To run this test, do:
//   sudo npm install -g mocha
//   mocha testCommon.js

var nodeHost = require('../../nodeHost.js');
var assert = require('assert');
describe('hosts/node/test/mocha/testCommon.js: testCommon', function () {
    it('load testCommon', function () {
        var testCommon = require('../../../../hosts/common/test/testCommon.js');
    });

    it('Wait 3 seconds until the Spontaneous tests complete', function(done) {
        // See https://mochajs.org/#timeouts
        this.timeout(4000);
        setTimeout(function () {done(); console.log("mocha/testCommon.js done");}, 3000);

    });
});
