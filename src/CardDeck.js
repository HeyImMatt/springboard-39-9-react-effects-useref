import React, { useState, useEffect } from 'react';
import Card from './Card'
import axios from 'axios'
import './CardDeck.css'

function CardDeck() {
  const [cardsShown, setCardsShown] = useState([]);
  const [deckId, setDeckId] = useState(null);

  useEffect(() => {
    async function getDeck() {
      try {
        const resp = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        setDeckId(resp.data.deck_id);
      }
      catch(err) {
        alert('Something went wrong')
        throw new Error(err)
      }
    }
    getDeck();
  }, [])

  async function getCard() {
    if (cardsShown.length < 52) {
      try {
        const resp = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        setCardsShown([...cardsShown, {rotate: rotateRandom(), ...resp.data.cards[0]}]);
      }
      catch(err) {
        alert('Something went wrong')
        throw new Error(err)
      }
    } else alert('There are no cards left!')
  }

  const rotateRandom = () => {
    let n = Math.floor(Math.random() * 360);
    return `rotate(${n}deg)`
  }

  return(
    <div className="CardDeck">
      <button onClick={getCard}>GET A CARD</button>
      {cardsShown.map((card, idx) =><Card card={card} idx={idx} />)}
    </div>
  )
}

export default CardDeck;