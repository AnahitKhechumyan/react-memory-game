import { useState } from "react";
import { faker } from '@faker-js/faker';
import { Button } from "../button/button";
import { Card } from "./card";
 
export const GameBoard = ({level, onResetGame})=>{
    const [cards, setCards] = useState(generateWordsCards(level)); 
    const [cardsRevealed, setCardsRevealed] = useState(true);

    const handleCardClick = (id) =>{ 
        setCards((prevState) => 
            prevState.map((card) => 
             card.id === id ? { ...card, revealed: true } : card)     
        );
    };

    const handleHideCards = ()=> {
        setCardsRevealed(false );  
    };

    const allcardsOpened = cards.every((card)=> card.revealed);

    const handleResetGame = () => {
        onResetGame();
    };

    return (
        <div className="game">
            {
               cardsRevealed ? (
                <Button
                className="secondary"
                onClick={handleHideCards}
                > 
                Hide
                </Button>
               ) : (
                  <div className="text-muted">
                    Start guessing by clicking the cards!
                  </div>
               )
            }
            
            <div className="cards">             
                {
                     cards.map((card) => {
                        return (
                           <Card 
                           show={cardsRevealed}
                           key={card.id} 
                           card={card} 
                           onClick={handleCardClick}
                           />
                        );
                    })
                } 
            </div>
            {
                allcardsOpened && (
                <div className="game-end">
                    <h2>Game Over! <img src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc4/1/30/1f389.png" widht="100px" haight="100px"></img></h2>
                    <Button
                    className="success"
                    onClick={handleResetGame}
                    >
                    Start Again
                    </Button>
                </div> 
                )
            }
        </div>
    );
};

const generateWordsCards = (level) => {
    const words = Array.from({length: level}, () => faker.word.noun());
    return words.map((word, index) => ({
         id: faker.string.uuid(),
         word,
         revealed: false,
         guessed: false,
         }));
};