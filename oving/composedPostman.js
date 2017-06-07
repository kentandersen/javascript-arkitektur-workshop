import prozac from './prozac';

class ComposedPostman {

  constructor(name) {
    this.name = name;
    this.prozac = prozac;
  }

  goPostal() {
    // I am always nice
  }

  deliverMail() {
    this.prozac.takeMeds();
  }

}

export default ComposedPostman;
