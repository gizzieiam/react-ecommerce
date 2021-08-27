import React from 'react'
import productsNames from '../helpers/productsName'
import Products from './../../Data/Products';

function AllProducts(props) {
    let sortProduct = productsNames().sort()
    let show = []

    for (const item of sortProduct) {
        for (const inventory in Products) {
            if (Object.hasOwnProperty.call(Products, inventory)) {
                const element = Products[inventory].productName;
                if (item === element) {
                    show.push(
                        <li>
                            <h1>{item}</h1>

                        </li>
                    )
                    console.log(element);
                }
                
            }
        }
    }
    return(
        <ul>
            {show}
        </ul>
    )
}

export default AllProducts
