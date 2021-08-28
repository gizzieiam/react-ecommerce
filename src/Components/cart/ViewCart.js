import React, { useState } from 'react'
import regex from './../helpers/regex';
import Products from './../../Data/Products';
import productsCost from './../helpers/productCost';
import Total from './Total';

function ViewCart(props){
    let show = []
    let qt = []
    let owed = []
    const [total, setTotal] = useState([
        {
            'amount': 0
        }
    ])
    for (let i = 0; i < localStorage.length; i++) {
        const kart = localStorage.getItem(localStorage.key(i));
        let item = regex(kart, 'name')
        let amount = regex(kart, 'amount')
        let price = productsCost(item)

        for (const name of Products) {
            let curr = name.productName

            if(item === curr){
                qt.push(amount)
                owed.push(price)
                show.push(
                    <li key={name.id + 40} className='vc-li'>
                        <div>
                        <img className='vc-img' src={name.image} alt=''/>
                        <p className='vc-wrap'>
                            {item}
                        </p>

                        </div>
                        <div className='vc-div'>
                        <p className='vc-qty text-secondary'>
                            Qty. {amount}
                        </p>
                        <p className='vc-price'>
                            Price ${price}
                        </p>

                        </div>



                    </li>
                )
            }
        }

    }
    return(
        <>
            <ul className='vc-ul'>
                {show}
                <Total cost={owed} amount={qt} />
            </ul>
            <div id='vc-btn'>

                <button className='btn btn-light'>
                    <a href='/' className='vc-btn'>
                        <p className='text-secondary'>
                            Proceed to checkout
                        </p>
                    </a>
                </button>
                <a href='/'>Continue shopping</a>
            </div>
        </>
    )
}

export default ViewCart