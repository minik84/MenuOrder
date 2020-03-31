import React from 'react';

const Item = (props) => (

  <li className={props.active ? "enabled" : "disabled"} key={props.key} onClick={() => props.click(props.id)}>{props.name} - {props.price} zł</li>
)

export default Item;