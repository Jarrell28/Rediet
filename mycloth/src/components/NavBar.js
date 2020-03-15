import React from 'react';

import "../css/navbar.css";
import basket from '../img/basket.jfif';

const NavBar = (props) => {

    return (
        <div>
            <nav id="mainNav">
                <ul>
                    <li onClick={props.click} className={props.currentPage === "Home" ? "active" : ""}>Home</li>
                    <li onClick={props.click} className={props.currentPage === "About" ? "active" : ""}>About</li>
                    <li onClick={props.click} className={props.currentPage === "Contact" ? "active" : ""}>Contact</li>
                </ul>
              {/* <div>
                    <img src={basket} id="basket"/>
                </div> */}
            </nav>
        </div>
    )
}

export default NavBar;