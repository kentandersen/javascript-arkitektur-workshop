require('../../test/enviroment');
const { expect } = require('chai');
const sinon = require('sinon');
const Store = require('./store').default;
const service = require('./service');

describe('Store', () => {

  before(() => {
    sinon.stub(service, 'get').returns(Promise.resolve([{name:'kent'},{},{},{},{}]));
  });

  after(() => {
    service.get.restore();
  });

  it('should have empty ppl and person', () => {
    const store = new Store();

    expect(store.ppl).to.be.an('array').that.is.empty;
    expect(store.person).to.be.an('object').that.is.empty;
  });

  it('should populate ppl when calling getPpl', (done) => {
    const store = new Store();

    store.getPpl().then(() => {
      expect(service.get).to.have.been.called;
      expect(store.ppl).to.be.an('array').to.have.lengthOf(5);
      done();
    });
  });

  it('should populate person when calling setPerson', (done) => {
    const store = new Store();

    store.getPpl().then(() => {
      store.setPerson(0);
      expect(store.person).to.have.property('name', 'kent');
      done();
    });
  });

  it('should notify subscribers when updating ppl', (done) => {
    const store = new Store();
    const callback = sinon.spy();
    store.subscribe(callback);

    store.getPpl().then(() => {
      expect(callback).to.have.been.called;
      done();
    });
  });

  it('should notify subscribers when updating person', (done) => {
    const store = new Store();
    const callback = sinon.spy();

    store.getPpl().then(() => {
      store.subscribe(callback);
      store.setPerson(0);

      expect(callback).to.have.been.called;
      done();
    });
  });

});
