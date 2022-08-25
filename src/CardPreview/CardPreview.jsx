import React from 'react';
import '../App.css';

function CardPreview ({card}) {
  return (
  <div className='card-preview-style'>
    <div style={{
      width: '200px',
      height: '400px',
      background: '#F2F2F2',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)'
    }}>
      <h1>{card.name}</h1>
      <img src={card.avatar}/>
      <div>{card.description}</div>
    </div>

  </div> )
}

export default CardPreview