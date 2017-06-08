class Person {
  constructor(props) {
    this.props = props;
    this.el = document.createElement('section');
  }

  setProps(newProps) {
    Object.assign(this.props, newProps);
    this.render();
  }

  render() {
    const { employmentId, name, title, department, phone, email } = this.props;
    this.el.id = 'person';

    this.el.innerHTML = `
      <div class="card">
        <div class="picture">
        <img src="https://res.cloudinary.com/bekkimg/w_301/d_default_image.png/${employmentId}" alt="${name}">
      </div>
        <span class="name">${name}</span>
        <span class="title">${title}</span>
        <span class="department">${department}</span>
        <span class="phone">${phone}</span>
        <span class="email">${email}</span>
      </div>
    `;
  }
}

export default Person;
