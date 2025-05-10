import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./ResetPassword.module.css";

const ResetPassword = () => {
    return (
        <div className={styles.container}>
            <section>
                <div className={styles.reset_wrapper}>
                <Link to="/profile">
                <a href="#" className={styles.close_btn}>X</a>
                </Link>
                    <div className={styles.form_container}>
                            <form>
                                <h2>Reset Password</h2>
                                <div className={styles.input_group}>
                                    <input type="e-mail" required />
                                    <label>Email</label>
                                </div>
                                <div className={styles.remember_container}>
                                <p className={styles.text}> You Remember Your Password</p>
                                <Link to="/login" className={styles.signInLink}>
                                     Sign In
                                </Link>
                                </div>
                                <Link to="/create_password"> 
                                <button className={styles.close_btn} type="submit" >Request password reset</button>
                                </Link>
                            </form>
                       
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ResetPassword;
