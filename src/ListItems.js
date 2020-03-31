import React from 'react';
import Item from './Item';
import './ListItems.css';

const ListItems = (props) => {

  const list = props.items.map(item => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      active={item.active}
      price={item.price}
      click={props.click}
    />
  ))

  return (
    <div>
      <h2>Twoje zamówienie</h2>
      <ul>
        {list}
      </ul>
    </div>
  )
}

export default ListItems;