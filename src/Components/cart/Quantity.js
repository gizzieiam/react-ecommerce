import React, { useState } from 'react'

function Quantity(props){
    let item = props.item

    const [quantity, setQuantity] = useState([
        {
            "count": 0
        }
    ])

    

    const handleIncrement = (e) => {
        let currAmount = quantity[quantity.length-1].count
        setQuantity([...quantity, {
            "count": currAmount + 1
        }])
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
            <button onClick={handleDecrement}>-</button>
            {quantity[quantity.length-1].count}
            <button onClick={handleIncrement}>+</button>
        </>
    )
}

export default Quantity
