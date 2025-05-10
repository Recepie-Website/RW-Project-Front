import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from "./LogIn.module.css";

const API_URL = process.env.REACT_APP_API_URL;

const LogIn = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    // for auth
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const handleToggle = (event) => {
        event.preventDefault();
        setIsSignIn((prev) => !prev);

        // reset username and password
        setUsername("")
        setPassword("")
        setEmail("")
    };

    // onclick "Sign In"
    const authenticate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/api/users/login`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            });

            const data = await response.json();

            if(!response.ok) {
                console.log(response);
                throw new Error(data.message || "Authentication failed");
            }

            console.log('Login successful', data);
            navigate("/");
        } catch (error) {
            console.log("Login error", error);
            return null;
        }
    };

    // on click Sign Up
    const Register = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/api/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            })

            const data = await response.json();

            if(!response.ok) {
                console.log(response);
                throw new Error(data.message || "Register failed");
            }

            console.log('Register successful', data);
            navigate("/");
        } catch (error) {
            console.log("Register error", error);
            return null;
        }
    }


    return (
        <div className={`${styles.login_container} ${isSignIn ? styles.sign_in_active : styles.sign_up_active}`}>
            <section>
                <div className={styles.login_wrapper}>
                <a href="#" className={styles.close_btn}>Close</a>
                    <div className={styles.form_container}>
                        {isSignIn ? (
                            <form>
                                <h2>Sign In</h2>
                                <div className={styles.input_group}>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="text" required />
                                    <label>email</label>
                                </div>
                                <div className={styles.input_group}>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password" required />
                                    <label>password</label>
                                </div>
                                <div className={styles.remember}>
                                    <a href="#" className={styles.forgot_password}>Forgot your password?</a>
                                </div>

                                <button onClick={authenticate} className={styles.s_button} type="submit">Sign In</button>
                                <div className={styles.signup_link}>
                                    <p> 
                                    <span onClick={handleToggle} className={styles.toggle_text}>Sign Up</span>
                                    </p>
                                </div>
                            </form>
                        ) : (
                            <form>
                                <h2>Sign Up</h2>
                                <div className={styles.input_group}>
                                    <input
                                        onChange={(e) => setUsername(e.target.value)}
                                        type="text"
                                        required
                                    />
                                    <label>username</label>
                                </div>
                                <div className={styles.input_group}>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="e-mail"
                                        required
                                    />
                                    <label>e-mail</label>
                                </div>
                                <div className={styles.input_group}>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        required
                                    />
                                    <label>password</label>
                                </div>
                                <div className={styles.remember}>
                                    <label><input type="checkbox" /> I agree to the terms & conditions</label>
                                </div>

                                <button className={styles.s_button} onClick={Register}  type="submit">Sign Up</button>
                                <div className={styles.signup_link}>
                                    <p>
                                        <span onClick={handleToggle} className={styles.toggle_text}> Sign In</span>
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LogIn;
