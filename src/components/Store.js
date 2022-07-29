import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductContextProvider';    //Context
import Loading from './Loading';
import Product from './shared/Product';     //Component
import styles from "./Store.module.css";


const Store = () => {

    const products = useContext(ProductsContext);

    return (
        <div className={styles.container}>
            {
                (products.length && products)
                ?
                products.map(item => <Product key={item.id} itemData={item} />)
                :
                <Loading />
            }
        </div>
    );
};

export default Store;





/*
    <div className={styles.container}>
      {
        (products && products.length)
          ?
          products.map((item) => <Product key={item.id} productData={item} />)
          :
          <Loading />
      }
    </div>
*/