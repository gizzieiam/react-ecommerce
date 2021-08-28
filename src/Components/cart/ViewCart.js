import React, { useState } from 'react'
import regex from './../helpers/regex';
import Products from './../../Data/Products';
import productsCost from './../helpers/productCost';
import Total from './Total';

function ViewCart(props){
    let show = []
    let qt = []
    let owed = []
    const [total, setTotal] = useState([
        {
            'amount': 0
        }
    ])
    for (let i = 0; i < localStorage.length; i++) {
        const kart = localStorage.getItem(localStorage.key(i));
        let item = regex(kart, 'name')
        let amount = regex(kart, 'amount')
        let price = productsCost(item)

        for (const name of Products) {
            let curr = name.productName

            if(item === curr){
                qt.push(amount)
                owed.push(price)
                show.push(
                    <li key={name.id + 40}>
                        <h1>
                            {item}
                        </h1>

                        <p>
                            Qt. {amount}
                        </p>
                        <p>
                            Price ${price}
                        </p>


                    </li>
                )
            }
        }

    }
    return(
        <>
            {show}
            <Total cost={owed} amount={qt} />
        </>
    )
}

export default ViewCart