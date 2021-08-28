import React from 'react'
import AllProducts from '../Components/products/AllProducts'
import SearchBar from '../Components/search/SearchBar'


function Products(props) {
    return(
        <>
            <SearchBar />
            <AllProducts />
        </>
    )
}

export default Products
