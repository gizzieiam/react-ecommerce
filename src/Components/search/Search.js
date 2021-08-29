import React from 'react'
import Products from '../../Data/Products.json'
import { Link } from "react-router-dom";

function Search(props){
    const search = props.searchItem
    const option = props.searchBy

    let results = []

    for(let i = 0; i< Products.length; i++){
        let productItem = Products[i]

        if(option === 'Name'){
            let itemCheck = productItem.productName.includes(search)
            
            if(itemCheck){
                if(productItem.quantity > 0){
                    results.push(
                        <li className='search-li'>
                            
                            <img className='search-img' src={productItem.image} alt='' />
                            <Link to={{
                                pathname: '/details',
                                state:{
                                    name: productItem
                                }
                            }} className='search-Link'>
                                <p>
                                    {productItem.productName}
                                </p>

                            </Link>
                        </li>
                    )
                }
            }
        }else if(option === 'Id'){
            if(String(productItem.id) === String(search)){
                if(productItem.quantity > 0){
                    results.push(
                        <li>
                            <Link to={{
                                pathname: '/details',
                                state: {
                                    selected: productItem.productName
                                }
                            }}>
                                <p>
                                    {productItem.productName}
                                </p>
                            </Link>
                        </li>
                    )
                }
            }
        }else{
            let itemCheck = productItem.category.includes(search)
            
            if(itemCheck){
                if(productItem.quantity > 0){
                    results.push(
                        <li>
                            <Link to={{
                                pathname: '/productDetails',
                                state: {
                                    selected: productItem.productName
                                }
                            }}>
                                <p>
                                    {productItem.productName}
                                </p>
                            </Link>
                        </li>
                    )
                }
            }
        }
    }


    return(
        <div className="card border-secondary mb-3">
        <ul id='search-ul'>
            {results}
        </ul>
        </div>
    )
}

export default Search