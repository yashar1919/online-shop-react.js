import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContextProvider';    //Context
import { isInCart, quantityCount, shortTitle } from '../../helper/functions';    //Function
import trashIcon from "../../icons/trash.svg";   //Icon
import styles from "./Product.module.css";

const Product = ({ itemData }) => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={itemData.image} alt="products" />
            <h3>{shortTitle(itemData.title)}</h3>
            <p>{`${itemData.price} $`}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${itemData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>

                    {
                        quantityCount(itemData.id, state) > 1
                        &&
                        <button onClick={() => dispatch({ type: "DECREASE", payload: itemData })} className={styles.smallButton}>-</button>
                    }


                    {
                        quantityCount(itemData.id, state) === 1
                        &&
                        <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: itemData })} className={styles.smallButton} ><img src={trashIcon} alt="trashIcon" ></img></button>
                    }


                    {
                        quantityCount(itemData.id, state) > 0
                        &&
                        <span className={styles.counter}>{quantityCount(itemData.id, state)}</span>
                    }


                    {
                        isInCart(itemData.id, state)
                            ?
                            <button onClick={() => dispatch({ type: "INCREASE", payload: itemData })} className={styles.smallButton} >+</button>
                            :
                            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: itemData })}>Add to Cart</button>
                    }

                </div>
            </div>
        </div>
    );
};

export default Product;