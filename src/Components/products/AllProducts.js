import React from 'react'
import { Link } from "react-router-dom";
import Products from './../../Data/Products';

function AllProducts(props) {
    let show = []
    for (const item of Products) {
        show.push(
            <li key={item.id}>
                <Link to={{
                    pathname: '/productDetails',
                    state:{
                        item: item.productName
                    }
                }}>
                    <h1>{item.productName}</h1>
                </Link>
            </li>
        )
    }

    return(
        <ul>
            {show}
        </ul>
    )
}

export default AllProducts
