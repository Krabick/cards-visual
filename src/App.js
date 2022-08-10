import './App.css';
import Header from './Header';
import React, {useState} from 'react';
import Body from './Body';
import Footer from './Footer';






function App() {
    const [Card, setCard] = useState([
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
    ])



  return (
    <div className = "App">
      <Header Name = 'HEADER'/>
        <Body Card = {Card} />
        <Footer />
    </div>
  );
}

export default App;
