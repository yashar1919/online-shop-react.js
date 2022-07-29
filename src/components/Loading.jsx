import React from 'react';
import styles from "./Loading.module.css";
import loader from "../GIF/loading.gif";

const Loading = () => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={loader} alt='Loading' />
            <h1 className={styles.loading}>L O A D I N G...</h1>
        </div>
    );
};

export default Loading;