import React from 'react'
import productsNames from './../helpers/productsName';

function SingleItem(props) {
    let selected = props.item
    let show = []
    let imgSrc = ''

    let itemInfo = productsNames(selected.productName)
    if (itemInfo.image !== "none") {
        imgSrc = itemInfo.image
    }else{
        imgSrc = 'oompa'
    }

    console.log(imgSrc)
    
    show.push(
        <li key={itemInfo.id}>
            {imgSrc}
            <img src={imgSrc} alt='' />
            <h1>{itemInfo.productName}</h1>
            <p>Price: {itemInfo.price}</p>

        </li>
    )



    return(
        <>
            {show}
        </>
    )
}

export default SingleItem