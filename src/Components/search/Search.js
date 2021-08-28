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
                        <li>
                            <Link to={{
                                pathname: '/details',
                                state:{
                                    name: productItem
                                }
                            }}>
                                <h1>
                                    {productItem.productName}
                                </h1>

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
                                <h1>
                                    {productItem.productName}
                                </h1>
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
                                pathname: '/details',
                                state: {
                                    selected: productItem.productName
                                }
                            }}>
                                <h1>
                                    {productItem.productName}
                                </h1>
                            </Link>
                        </li>
                    )
                }
            }
        }
    }


    return(
        <>
            {results}
        </>
    )
}

export default Search