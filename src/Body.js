import './App.css';
import React from 'react';
import Actions from './Actions';

function Body({Card}) {
    return (
        <div className='BodyStyleColumn'>
            <div className='BodyStyleRowForCards'>
              {Card.map((card) => (
              <div className='CardsStyle'><h1>{card.name}</h1>
                <img src={card.avatar}/>
                <div>{card.description}</div>
              </div>   ))
              }
            </div>
            <Actions />
        </div>

    );
}

export default Body;