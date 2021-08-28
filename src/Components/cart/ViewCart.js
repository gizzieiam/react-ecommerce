import React from 'react'
import regex from './../helpers/regex';
import Products from './../../Data/Products';

function ViewCart(props){
    let show = []
    for (let i = 0; i < localStorage.length; i++) {
        const element = localStorage.getItem(localStorage.key(i));
        let item = regex(element, 'name')
        let amount = regex(element, 'amount')
        for (let j = 0; j < Products.length; j++) {
            const elements = Products[j];
            
            // console.log(elements);
        }

    }
    return(
        <>
        </>
    )
}

export default ViewCart