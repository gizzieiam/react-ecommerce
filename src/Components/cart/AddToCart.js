import React, { useState } from 'react'
import regex from './../helpers/regex';

function AddToCart(props){
    let product = props.item
    let quantity = props.amount
    const [msg, setMsg] = useState([
        {
            'msg': ''
        }
    ])

    
    const handleAdd = (e) => {
        let store =  product +'--' + quantity.toString()
        localStorage.setItem(localStorage.length,store)
        setMsg([...msg, {
            msg: quantity.toString() + ' ' +product + ' was added to cart'
        }])
    }
    return(
        <>
            <button onClick={handleAdd} className='btn btn-outline-light add-btn'>
                Add to Cart
            </button>
            <p className='align-center text-muted'>{msg[msg.length-1].msg}</p>
        </>
    )
}

export default AddToCart