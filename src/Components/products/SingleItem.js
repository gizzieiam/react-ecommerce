import React from 'react'
import AddToCart from '../cart/AddToCart';
import productsNames from './../helpers/productsName';

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
    console.log(itemInfo);
    show.push(
        <li key={itemInfo.id + 20}>
            {imgSrc}
            <img src={imgSrc} alt='' />ee
            <h1>{itemInfo.productName}</h1>
            <p>Price: {itemInfo.price}</p>
            <AddToCart item={itemInfo.productName} />
        </li>
    )



    return(
        <>
            {show}
        </>
    )
}

export default SingleItem