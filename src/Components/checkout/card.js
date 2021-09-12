import React from 'react'
import Address from './address'

function Card(props){
    const [card, setCard] = ([
        {
            name: 'none',
            num: 0,
            cvv: 0,
            zip: 0,
        }
    ])

    const [err, setErr] = ([
        {
            name: '',
            num: '',
            cvv: '',
            zip: '',
        }
    ])
    
    const handleName = (e) =>{
        setCard([...card, 
            {
            name: e.target.value,
            num: card[card.length-1].num,
            cvv: card[card.length-1].cvv,
            zip: card[card.length-1].zip,
            }
        ])
    }

    const handleNum = (e) =>{
        if(e.target.value.length === 14 || e.target.value.length < 15){
            setCard([...card, 
                {
                name: card[card.length-1].name,
                num: e.target.value,
                cvv: card[card.length-1].cvv,
                zip: card[card.length-1].zip,
                }
            ])
        }else{
            setErr([...err,
                {
                    name: err[err.length-1].name,
                    num: 'Invalid Card Number',
                    cvv: err[err.length-1].cvv,
                    zip: err[err.length-1].zip,
                }
            ])
        }
    }

    const handleCvv = (e) =>{
        if(e.target.value.length === 3 || e.target.value.length ===4){
            setCard([...card, 
                {
                name: card[card.length-1].name,
                num: card[card.length-1].num,
                cvv: e.target.value,
                zip: card[card.length-1].zip,
                }
            ])
        }else{
            setErr([...err, 
                {
                name: err[err.length-1].name,
                num: err[err.length-1].num,
                cvv: 'Invalid CVV',
                zip: err[err.length-1].zip,
                }
            ])
        }
    }

    const handleZip = (e) =>{
        setCard([...card, 
            {
            name: card[card.length-1].name,
            num: card[card.length-1].num,
            cvv: card[card.length-1].cvv,
            zip: e.target.value,
            }
        ])
    }

    return render(
        <>
            <form>
                <input />
                <input />
                <input />
                <input />
            </form>
            <Address card={card[card.length-1].num} />
        </>
    )
}

export default Card