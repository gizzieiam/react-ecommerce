import React from 'react'
import { Link } from "react-router-dom";
import Products from './../../Data/Products';
import titleCasing from './../helpers/titleCasing';

function AllProducts(props) {
    let show = []
    for (const item of Products) {
        show.push(
            <li key={item.id} className='ap-li'>
                <img src={item.image} alt='' className='ap-img'/>

                <Link className='ap-Link' to={{
                    pathname: '/productDetails',
                    state:{
                        item: item.productName
                    }
                }}>
                    <h5 className='align-center ap-h5'>{titleCasing(item.productName)}</h5>
                </Link>
                <p className='text-secondary'>
                    ${item.price}
                </p>
            </li>
        )
    }

    return(
        <ul id='al-ul'>
            {show.slice(0, 4)}
        </ul>
    )
}

export default AllProducts
