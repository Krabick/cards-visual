import '../App.css';
import React from 'react';
import Actions from '../Actions/Actions';

function Body({Card}) {
    return (
        <div className='body-style-column'>
          <div className='body-style-row-for-cards'>
            {Card.map((card) => (
              <div key={card.id} className='cards-style' >
                <h1>{card.name}</h1>
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