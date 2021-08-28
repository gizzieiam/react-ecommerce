import React from 'react'
import { NavDropdown } from 'react-bootstrap'

function NavBar(props){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-secondary" href="/">
                    The Chocolate Factory
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor01">
                    <NavDropdown />
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar