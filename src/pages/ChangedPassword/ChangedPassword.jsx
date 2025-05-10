import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./ChangedPassword.module.css";

const ChangedPassword = () => {
    return (
        <div className={styles.container}>
            <section>
                <div className={styles.reset_wrapper}>
                <Link to="/profile">
                <a href="#" className={styles.close_btn}>X</a>
                </Link>
                    <div className={styles.form_container}>
                            <form>
                                <img className={styles.image} src='/mainpage/dump1.png'/>
                                <h2>Password Changed Succesfuly!</h2>
                            </form>
                       
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ChangedPassword;
