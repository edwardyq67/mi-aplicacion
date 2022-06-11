import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

const getRandom=()=>Math.floor(Math.random()*quotes.length);
const colors=["#0489B1","#01DFD7","#AEB404","#B40486","#6E6E6E","#FE2E2E"]

const Quotes = (icon) => {

    const [quote,setQuote]=useState(quotes[getRandom()])
    const changeQuote=()=>{
        setQuote(quotes[getRandom()]);
    }

    const color=colors[Math.floor(Math.random()*6)];
    
    document.body.style=`background:${color}`;
    return (
        <div className='Quote'style={{color:color}} >
            <p ><i><FontAwesomeIcon icon={faArrowsRotate} /></i>{quote.quote}</p>
            
            <p className='Arthor'>{quote.author}</p>
            <div className='btn'>
            <button  onClick={changeQuote} style={{background:color}}><i><FontAwesomeIcon icon={faAnglesRight} /></i></button>
            </div>
            
        </div>
    );
};

export default Quotes;