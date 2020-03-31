import React from 'react'
import './style.css'

const Header=(props)=>{
    return(
        <header className="header">
            <nav className="hedaerMenu">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                
            </nav>
            <div>
                Social Media Link
            </div>
        </header>
    )
}

export default Header