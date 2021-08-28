import React, { useState } from 'react'
import productsQuantity from './../helpers/productQuantity';
import AddToCart from './AddToCart';

function Quantity(props){
    let item = props.item
    let amount = productsQuantity(item)

    const [quantity, setQuantity] = useState([
        {
            "count": 0
        }
    ])


    const handleIncrement = (e) => {
        let currAmount = quantity[quantity.length-1].count
        if (currAmount < amount) {
            setQuantity([...quantity, {
                "count": currAmount + 1
            }])
        }else{
            //TODO: msg max items reached
        }
    }

    const handleDecrement = (e) => {
        let currAmount = quantity[quantity.length-1].count
        if (currAmount > 0) {
            setQuantity([...quantity, {
                "count": currAmount - 1
            }])
        }
    }

    return(
        <>
        <div id='qt-div'>
            <button onClick={handleDecrement} className='btn btn-outline-secondary qt-btn'>-</button>
            <p className='text-secondary'>
                {quantity[quantity.length-1].count}
            </p>
            <button onClick={handleIncrement} className='btn btn-outline-secondary qt-btn'>+</button>
        </div>
        <AddToCart item={item} amount={quantity[quantity.length-1].count} />
        </>
    )
}

export default Quantity
