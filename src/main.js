import Store from './store/store';
import App from './app';

const store = new Store();
const app = new App({store});

store.getPpl();

function mount() {
  app.render();
  document.body.appendChild(app.el);
}

document.addEventListener('DOMContentLoaded', mount);
