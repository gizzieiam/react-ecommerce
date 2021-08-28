import React, { useState } from 'react'
import cart from '../../static/img/cart.png'
import regex from './../helpers/regex';
import addArray from './../helpers/addArray';

function CartLink(props){
    const [numOfItems, setNumOfItems] = useState([
        {'count': 0}
    ])
    let quantity = []
    
    for (let i = 0; i < localStorage.length; i++) {
        const element = localStorage[i];
        quantity.push(parseInt(regex(element, 'amount')))
    }
    let total = addArray(quantity)

    if(numOfItems[numOfItems.length-1].count !== total){
        setNumOfItems([...numOfItems, {'count': total}])
    }

    return(
        <>
        <p id='cl-count'>
            {numOfItems[numOfItems.length-1].count}
        </p>
        <a href='/cart'>
            <img alt='' src={cart} id='cart-img' />
        </a>

        </>
    )
}

export default CartLink