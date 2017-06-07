import Postman from './postman';


class SanePostman extends Postman {

  goPostal() {
    // be nice
  }

  deliverMail() {
    this.takeMeds();
    super.deliverMail();
  }

  takeMeds() {

  }

}

export default SanePostman;
