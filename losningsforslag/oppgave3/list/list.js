class List {
  constructor(props) {
    this.props = props;
    this.el = document.createElement('ul');
  }

  setProps(newProps) {
    Object.assign(this.props, newProps);
    this.render();
  }

  render() {
    this.el.id = 'list'
    this.el.innerHTML = this.props.ppl.map(({name}) => `
      <li>${name}</li>
    `).join('');
  }
}

export default List;
