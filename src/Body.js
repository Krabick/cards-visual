import './App.css';
import React from 'react'

function Body({Card}) {
    console.log({Card})
    return (
        <div>
            {Card.map((card) => (
            <div><h1>{card.name}</h1>
            <img src={card.avatar}/>
            <div>{card.description}</div>
            </div>   ))
            }
        </div>
    );
}

export default Body;