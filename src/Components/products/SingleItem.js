import React from 'react'
import AddToCart from '../cart/Quantity';
import productsNames from './../helpers/productsName';
import Quantity from './../cart/Quantity';

function SingleItem(props) {
    let selected = props.item
    let show = []
    let imgSrc = ''

    let itemInfo = productsNames(selected)
    if (itemInfo.image !== "none") {
        imgSrc = itemInfo.image
    }else{
        imgSrc = 'oompa'
    }
    show.push(
        <li key={itemInfo.id + 20} className='pd-li'>
            {imgSrc}
            <img src={imgSrc} alt='' />ee
            <h1 id='pd-name'>{itemInfo.productName}</h1>
            <p>Price: {itemInfo.price}</p>
            <Quantity item={itemInfo.productName} />
        </li>
    )



    return(
        <>
            {show}
        </>
    )
}

export default SingleItem