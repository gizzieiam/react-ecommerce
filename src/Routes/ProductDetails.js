import React from 'react'
import SingleItem from '../Components/products/SingleItem'

function ProductDetails(props) {
    return(
        <>
            <SingleItem item={props.location.state.item}/>
        </>
    )
}

export default ProductDetails
