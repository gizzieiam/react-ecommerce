import React, { useState } from 'react'

function AddToCart(props){
    let item = props.item
    const [quantity, setQuantity] = useState([
        {
            "count": 0
        }
    ])

    const increment = (e) => {

    }

    const decrement = (e) => {
        
    }

    return(
        <>
            <button>-</button>
            {quantity[quantity.length-1].count}
            <button>+</button>
        </>
    )
}

export default AddToCart
