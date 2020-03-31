import React from 'react';

const Header = (props) => {

  const arrayorder = props.items.filter(item => item.active === true)
  const finalorderArray = arrayorder.map(order => order.price)
  const finalorder = finalorderArray.reduce((a, b) => a + b, 0)


  return (
    <div>
      <h2>Wielkość zamówienia</h2>
      <h3>Do zapłaty: {finalorder}</h3>
    </div>
  )
}

export default Header