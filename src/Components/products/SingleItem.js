import React from 'react'
import productsNames from './../helpers/productsName';
import Quantity from './../cart/Quantity';
import titleCasing from './../helpers/titleCasing';
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
            <img src={imgSrc} alt='' className='si-img' />
            <br />
            <br/>

            <h1 id='pd-name'>{titleCasing(itemInfo.productName)}</h1>
            <p id='si-price' className='align-center text-muted'>Price: ${itemInfo.price}</p>
            <div id='si-btn-container'>
                <Quantity item={itemInfo.productName} />
            </div>
        </li>
    )



    return(
        <>
            {show}
        </>
    )
}

export default SingleItem