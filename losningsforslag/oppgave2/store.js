import { get } from './service';

class Store {
  constructor() {
    this.ppl = [];
    this.person = {};

    this._subscribers = [];
  }

  getPpl() {
    return get().then(ppl => {
      this.ppl = ppl;
      this.person = ppl[0];

      this.notify();
    });
  }

  setPerson(index) {
    this.person = this.ppl[index] || {};
    this.notify();
  }

  subscribe(fn) {
    this._subscribers.push(fn);
  }

  notify() {
    this._subscribers.forEach(fn => fn());
  }

};

export default Store;
