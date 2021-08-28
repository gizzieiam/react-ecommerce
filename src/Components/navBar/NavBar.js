import React from 'react'
import CartLink from '../cart/CartLink'

function NavBar(props){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-secondary" href="/">
                    The Chocolate Factory
                </a>
                <CartLink />
            </div>
        </nav>
        </>
    )
}

export default NavBar