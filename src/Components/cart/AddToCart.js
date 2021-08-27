import React from 'react'
import regex from './../helpers/regex';

function AddToCart(props){
    let product = props.item
    let quantity = props.amount

    
    const handleAdd = (e) => {
        let store =  product +'--' + quantity.toString()
        if (quantity > 0) {
            if(localStorage.length === 0){
                localStorage.setItem(localStorage.length,store)
            }else{
                regex(store, 'amount')
            }
        }
    }
    return(
        <>
            <button onClick={handleAdd}>
                Add to Cart
            </button>
        </>
    )
}

export default AddToCart