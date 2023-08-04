import React from 'react'
import logo from "../images/full logo.png"
import {NavLink} from "react-router-dom"
 
let styles = {
    color:'white',
    textDecoration:'none'
  }

const Navbar = () =>{ 
    
return (
    <div className='mynav'>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src={logo} alt="" width="180" height="50"/>
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NavLink to="/" style={styles}>Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="movies" style={styles}>Movies</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="tvshows" style={styles}>TV Shows</NavLink>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="search"/>
                    <button class="btn btn btn-outline-light" type="submit" value="search">Search</button>
                </form>
            </div>
        </div>
    </nav>


    </div>
  )
}

export default Navbar