import React from 'react';
import "../css/navbar.scss";
import basket from '../img/basket.jpg';
import { Link } from 'react-router-dom';

const NavBar = (props) => {


    return (
        <div>
            <nav id="mainNav">
                <ul>
                    <li onClick={props.click} className={props.currentPage === "Home" ? "active" : ""}>
                        <Link to="/">Home</Link></li>
                    <li onClick={props.click} className={props.currentPage === "About" ? "active" : ""}>
                        <Link> About </Link> </li>
                    <li onClick={props.click} className={props.currentPage === "Contact Us" ? "active" : ""}>
                        <Link>  Contact Us </Link> </li>
                    <li onClick={props.click} className={props.currentPage === "login" ? "active" : ""}>
                        <Link to="/Login">login</Link></li>
                    <li onClick={props.click} className={props.currentPage === "Try it on" ? "active" : ""}>
                        <Link>Try it on </Link> </li>

                </ul>
                <div id="cart">
                    <div>
                        <img src={basket} id="basket" />
                    </div>
                    <ul>
                        <li onClick={props.click} className={props.currentPage === "My Cart (0)" ? "active" : ""}> My Cart (0)</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

/*const hang = styled.div'animation:2s ${keyframes'${hang}'}infinite'; */

export default NavBar;