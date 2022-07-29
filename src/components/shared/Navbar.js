import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';    //Context
import shopIcon from "../../icons/shop.png";
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";

const Navbar = () => {

    const { state } = useContext(CartContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/shopcart"><img src={shopIcon} alt="shopIcon" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;