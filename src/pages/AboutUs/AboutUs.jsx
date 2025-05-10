import React from "react";
import styles from "./AboutUs.module.css";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import CategorySlider from "../../components/CategorySlider/CategorySlider";

const AboutUs = () => {
  return (
    <>
    <Header/>
      <div className={styles.AboutUs}>
        <section className={styles.heroSection}>
          <div className={styles.textWrapper}>
            <h1 className={styles.mainTitle}>
              LOREM <span className={styles.underline}>IPSUM</span>
              <br />
              DOLOR SI AMET
            </h1>
          </div>
        </section>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="/mainpage/dump2.png"
          alt="dump"
          className={styles.heroImage}
        />
      </div>

      <section className={styles.section3}>
        <div className={styles.red_section_wrapper}>
          <h1 className={styles.whitetext}>
            <div className={styles.topText}>
              <span className={styles.topText}>LOREM</span>
              <img src="/mainpage/dump1.png" alt="dump" className={styles.inlineImage} />
              <span className={styles.topText}>LOREM</span>
            </div>
            <div className={styles.bottomText}>IPSUM DOLOR?</div>
          </h1>
        </div>

       
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>Lorem</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={styles.card}>
            <h3>Lorem</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={styles.card}>
            <h3>Lorem</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h1 className={styles.heading}>LOREM</h1>
          <p className={styles.paragraph}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud
          </p>
        </div>
        <img src="/LastRecepies/8.png" alt="Food" className={styles.image} />
      </div>
      <div className={styles.feedbackSection}>
        
        <h2 className={styles.feedbackHeading}>
        <span className={styles.leaveText}>LEAVE</span>
          <span className={styles.feedbackText}>
            YOUR <span className={styles.feedbackHighlight}>FEEDBACK</span>
          </span>
        </h2>
        <form className={styles.form}>
          <input type="text" placeholder="user name" className={styles.input} />
          <input type="email" placeholder="e-mail" className={styles.input} />
          <textarea placeholder="message..." className={styles.textarea}></textarea>
          <button type="submit" className={styles.button}>send</button>
        </form>
      </div>
      </div>
      <Footer/>

      
     
    </>
  );
};

export default AboutUs;
