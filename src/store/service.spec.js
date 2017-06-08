require('../../test/enviroment');
const { expect } = require('chai');
const service = require('./service');

describe('Service', () => {

  it('should return a promise when calling get', () => {
    const prom = service.get()
    expect(prom).to.be.instanceof(Promise);
  });

});
