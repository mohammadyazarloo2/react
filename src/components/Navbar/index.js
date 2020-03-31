import React from 'react'
import './style.css'

const Navbar=(props)=>{
    return(
        <div className="navbar">
            <ul className="navbarMenu">
                <li>Home</li>
                <li>Posts</li>
                <li>Contact Us</li>
                <li>About Us</li>
            </ul>
            <div className="search">
            <input type="text" placeholder="Search" />
            <img alt="search" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-32.png" />
            </div>
        </div>
    )
}

export default Navbar