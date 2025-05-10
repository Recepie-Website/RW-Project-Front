import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./CreatePassword.module.css";

const CreatePassword = () => {
    return (
        <div className={styles.container}>
            <section>
                <div className={styles.reset_wrapper}>
                <Link to="/profile">
                <a href="#" className={styles.close_btn}>X</a>
                </Link>
                    <div className={styles.form_container}>
                            <form>
                                <h2>Create new password</h2>
                                <div className={styles.input_group}>
                                    <input type="password" required />
                                    <label>Password</label>
                                </div>
                                
                                <Link to="/changed_password"> 
                                <button className={styles.close_btn} type="submit" >Reset Password</button>
                                </Link>
                            </form>
                       
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CreatePassword;
