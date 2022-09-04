import '../App.css';
import React, {useEffect, useState} from 'react';
import Actions from '../Actions/Actions';
import CardPreview from '../CardPreview/CardPreview'


function Body({Card}) {
    const [allCards, setAllCards] = useState(Card)
    const [selectedCard, setSelectedCard] = useState(false)
    const [showAll, setShowAll] = useState(false)
    const numberOfCards = showAll ? Card.length : 8

    useEffect( () => {
    setAllCards(Card) }, [Card])

    function DeleteCard(id) {
      setAllCards(prevAllCards => prevAllCards.filter(card => card.id != id))
    }

    return (
        <div className='body-style-column'>


          <div className='body-style-row-for-cards'>
            {allCards.slice(0, numberOfCards).map((card) => (
              <div key={card.id} className='cards-style'  onClick={() => setSelectedCard(card)}>
                <h1>{card.name}</h1>
                <img src={card.avatar}/>
                <div>{card.description}</div>
                <div className='cards-power-style'>{card.power}</div>
                <div className='cards-hp-style'>{card.hp}</div>
                <div className='cards-type-style'>{card.type}</div>
                <button className='delete-card-button' onClick={() => DeleteCard(card.id)}>Удалить</button>
              </div>   ))
            }
          </div>

          <a className='card-show-all' onClick={() => setShowAll(true)}>Показать всё</a>
          {selectedCard && (
            <div>
              <CardPreview card={selectedCard} />
              <a className='card-preview-close-button' onClick={() => setSelectedCard(false)}>X</a>
            </div>
          )}


          <Actions />


        </div>

    );
}

export default Body;