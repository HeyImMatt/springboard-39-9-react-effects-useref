import React, { useState, useEffect } from 'react';
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

  console.log(deckId)

  return(
    <div className="CardDeck">
      <button>GET A CARD</button>
    </div>
  )
}

export default CardDeck;