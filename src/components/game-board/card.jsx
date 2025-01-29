export  function Card({card, show, onClick}){
    const {id, revealed, word }= card;

    const handleCardChecked = ()=>{
        onClick(id);
    };
    
    return (
        <div className={`ui card  ${ revealed || show ? 
            "card-revealed" : "card-hidden" 
            }`} 
            >
            { revealed || show ? ( 
                 word
                ) : ( 
                <div className="text-muted input-group">
                <input type="text" placeholder='Guess the word' />
                <button className="check" onClick={handleCardChecked}>Check</button>
                </div>
                )
            }
            
        </div>
       
    );
};