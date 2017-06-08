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

  handleUpdate() {
    // dunno
  }

  render() {
    this.list.render();
    this.person.render();
  }
}

export default App;
