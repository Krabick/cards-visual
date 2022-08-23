import '../App.css';
import React, {useState} from 'react';
import Actions from '../Actions/Actions';
import CardPreview from '../CardPreview/CardPreview'


function Body({Card}) {
    const [selectedCard, setSelectedCard] = useState(false)
    return (
        <div className='body-style-column'>


          <div className='body-style-row-for-cards'>
            {Card.map((card) => (
              <div key={card.id} className='cards-style'  onClick={() => setSelectedCard(true)}>
                <h1>{card.name}</h1>
                <img src={card.avatar}/>
                <div>{card.description}</div>
              </div>   ))
            }
          </div>


          {selectedCard && (
            <div>
              <CardPreview cardID={selectedCard} />
              <a className='card-preview-close-button' onClick={() => setSelectedCard(false)}>X</a>
            </div>
          )}


          <Actions />


        </div>

    );
}

export default Body;