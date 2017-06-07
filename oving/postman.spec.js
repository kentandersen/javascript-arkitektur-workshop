require('babel-core/register');

const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const Postman = require('./postman').default;
const SanePostman = require('./sanePostman').default;
const ComposedPostman = require('./composedPostman').default;

const { expect } = chai;


chai.use(sinonChai)

describe('A sane postman', () => {

  it('should have same qualites as a postman', () => {
    const pat = new SanePostman('Pat');
    expect(pat).to.be.instanceof(Postman);
  });

  it('should prevent a postman from going postal', () => {
    const evilPat = new Postman('Evil Pat');
    const pat = new SanePostman('Pat');
    expect(evilPat.goPostal).to.throw();
    expect(pat.goPostal).to.not.throw();
  });

  it('should take meds when delivering mail', () => {
    const pat = new SanePostman('Pat');
    sinon.stub(pat, 'takeMeds');
    pat.deliverMail();
    expect(pat.takeMeds).to.have.been.called;
  });

  it('should deliver mail when taking meds', () => {
    const pat = new SanePostman('Pat');

    sinon.stub(Postman.prototype, 'deliverMail');
    pat.deliverMail();
    expect(Postman.prototype.deliverMail).to.have.been.called;

    Postman.prototype.deliverMail.restore();
  });
});

describe('A composed postman', () => {

  it('should not have same qualites as a postman', () => {
    const pat = new ComposedPostman('Pat');
    expect(pat).to.not.be.instanceof(Postman);
  });

  it('should prevent a postman from going postal', () => {
    const pat = new ComposedPostman('Pat');
    expect(pat.goPostal).to.not.throw();
  });

  it('should take meds when delivering mail', () => {
    const pat = new ComposedPostman('Pat');
    sinon.stub(pat.prozac, 'takeMeds');
    pat.deliverMail();
    expect(pat.prozac.takeMeds).to.have.been.called;
  });

  it('should deliver mail when taking meds', () => {
    const pat = new ComposedPostman('Pat');

    sinon.stub(pat, 'deliverMail');
    pat.deliverMail();
    expect(pat.deliverMail).to.have.been.called;

    pat.deliverMail.restore();
  });
});
