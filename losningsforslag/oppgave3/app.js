import List from './list/list';
import Person from './person/person';

function emptyElement(node) {
  let last;
  while ((last = node.lastChild)) {
    node.removeChild(last);
  }
}

class App {
  constructor({store}) {
    this.store = store;
    this.el = document.createElement('main');
    this.list = new List({ ppl: this.store.ppl });
    this.person = new Person(store.person);

    store.subscribe(this.handleUpdate.bind(this));
  }

  changePersonHandler() {
    console.log('changePersonHandler');
    // store.setPerson()
  }

  handleUpdate() {
    this.list.setProps({
      ppl: this.store.ppl
    });
    this.person.setProps(this.store.person);
  }

  render() {
    this.list.render();
    this.person.render();

    this.el.id = 'app';
    emptyElement(this.el);
    this.el.appendChild(this.list.el);
    this.el.appendChild(this.person.el);
  }
}

export default App;
