class Person {
  constructor(props) {
    this.el = document.createElement('section');
  }

  render() {
    this.el.id = 'person';
  }
}

export default Person;
