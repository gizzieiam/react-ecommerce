import React from 'react'
import multiply from './../helpers/multiply';

function Total(props) {
    let cost = props.cost
    let quantity = props.amount
    let total = 0 
    for (let i = 0; i < cost.length; i++) {
        const price = cost[i];
        const amount = quantity[i]
        let times = multiply(price, amount)
        
        total += times
    }
    return(
        <>
            <p>
                Total: {total}
            </p>
        </>
    )
}

export default Total