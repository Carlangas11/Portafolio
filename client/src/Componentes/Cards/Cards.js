import React from 'react'
import Card from '../Card/Card';
import  "./Cards.css";

const Cards = ({cities, onClose}) => {
    return (
        <div className="cards">
            {cities.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          id={c.id}
          onClose={() => onClose(c.id)}
        /> )}
        </div>
    )
    
}

export default Cards;

// 