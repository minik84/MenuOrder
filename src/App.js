import React from 'react';
import './App.css';
import Header from './Header';
import ListItems from './ListItems'

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Herbata", active: true, price: 10 },
      { id: 2, name: "Zemniaki", active: false, price: 15 },
      { id: 3, name: "Kasza", active: false, price: 20 },
      { id: 4, name: "Zupa wodna", active: true, price: 25 },
      { id: 5, name: "Wrzątek", active: false, price: 30 },
      { id: 6, name: "Chleb", active: true, price: 35 },
    ],
  }

  handleClickList = (id) => {
    console.log(`działa klik ${id}`);
    const items = this.state.items.map(item => {
      if (id === item.id) {
        item.active = !item.active
      }
      return item
    })
    this.setState({
      items
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems items={this.state.items} click={this.handleClickList} />
      </React.Fragment>
    )
  }
}

export default App;
