import React, { useEffect, useState } from "react";
import "./AddCards.scss"

const Card = (props) => {
  useEffect(()=> {
    alert("Congrats! You've just created a new card")
  }, [])

  return (
    <div className="card">
      <h3>This is a card</h3>
      <p>This is the card's text</p>
      <button>Delete</button>
    </div>
  );
};

const CardCollection = () => {
  const [cardList, setCardList] = useState([]);

  const handleCardCollection = () => {
    setCardList(cardList.concat(<Card key={cardList.length}/>));
  };

  return (
    <div>
      <button onClick={handleCardCollection}>Add a new card:</button>
      {cardList}
    </div>
  );
};

export default CardCollection;
