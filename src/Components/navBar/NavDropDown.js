import React from 'react'

function NavDropDown(props){
    return(
        <>
            <div className="collapse navbar-collapse" id="navbarColor01">

            <ul className="navbar-nav me-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </li>
            </ul>
            </div>
        </>
    )
}

export default NavDropDown