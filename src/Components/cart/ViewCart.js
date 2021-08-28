import React from 'react'
import regex from './../helpers/regex';
import Products from './../../Data/Products';

function ViewCart(props){
    let show = []
    for (let i = 0; i < localStorage.length; i++) {
        const kart = localStorage.getItem(localStorage.key(i));
        let item = regex(kart, 'name')
        let amount = regex(kart, 'amount')

        for (const name of Products) {
            let curr = name.productName
            if(item === curr){
                show.push(
                    <li>
                        <h1>
                            {item}
                        </h1>

                        <p>Qt. {amount}</p>

                    </li>
                )
            }
        }


    }
    return(
        <>
            {show}
        </>
    )
}

export default ViewCart