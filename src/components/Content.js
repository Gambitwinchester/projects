import React from 'react'
import ImageOne from '../images/caipa-two.jpg'
import ImageTwo from '../images/modern-drink.jpeg'

const Content = () => {
  return (
      <>
    <div className="menu-card">
      <img src={ImageOne} alt="caipa-two" className="h-full rounded mb-20 shadow" />
      <div className="center-content">
          <h2 className="text-2xl mb-2">Caipa Red</h2>
          <p className="mb-2">Red Fruit Caipirinha</p>
          <span>$16</span>
      </div>
    </div>

    <div className="menu-card">
    <img src={ImageTwo} alt="caipa-two" className="h-full rounded mb-20 shadow" />
    <div className="center-content">
        <h2 className="text-2xl mb-2">Tagerine Drink</h2>
        <p className="mb-2">Red Fruit Caipirinha</p>
        <span>$16</span>
    </div>
    </div>
    </>
  );
};

export default Content
