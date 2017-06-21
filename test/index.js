const utils = require('../index.js');
const assert = require('assert');

describe('Logical Comparisons', function(){
  describe('orCompare():', function(){
    it('should return true when at least on argument is true', function(){
      assert.equal(utils.orCompare(true,false, false),true);
      assert.equal(utils.orCompare(false,true,false,false),true);
      assert.equal(utils.orCompare(false,true),true);
    });
  });
});
