import './App.css';
import Header from './Header/Header';
import React, {useEffect, useState} from 'react';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import {httpApi, CONTENT_TYPES, METHODS} from './Api';
import axios from "axios";


const MOCK_CARDS = [
    {
        id: 1,
        avatar: "https://wow.blizzwiki.ru/images/8/84/BTNBanditLord.png?20140531224959",
        description: "Так как пришел первым",
        name: "Первый"
    },
    {
        id: 2,
        avatar: "https://wow.blizzwiki.ru/images/1/13/BTNDarkTroll.png?20140531224252",
        description: "Так как пришел вторым",
        name: "Второй"
    },
    {
        id: 3,
        avatar: "https://wow.blizzwiki.ru/images/c/c5/BTNVillagerKid.png?20140531220010",
        description: "Так как пришел первым с конца",
        name: "Третий"
    }
];







function App() {
    const [cards, setCards] = useState(MOCK_CARDS);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/murloc',
            headers: {
                'X-RapidAPI-Key': '16bebb073amshc5e0cfce0946ad8p146a56jsne5369a2f356d',
                'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            const HSCards = response.data
            HSCards.map((card, index) => {
                if (index < 47) {
                    return  setCards(prevCards => [...prevCards, {
                          id: card.cardId,
                          avatar: "http://wow.blizzwiki.ru/images/9/97/BTNMurloc.png",
                          description: card.text ,
                          name: card.name
                      }]
                    )
                }
                return
            })
        }).catch(function (error) {
            console.error(error);
        });

    }, [])


    return (
      <div className='App'>
          <Header Name='HEADER'/>
          <Body Card={cards}/>
          <Footer/>
      </div>
    );
}

export default App;