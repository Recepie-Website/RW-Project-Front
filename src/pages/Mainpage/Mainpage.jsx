import React from "react";
import styles from "./Mainpage.module.css";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Carrousel from "../../components/Carrousel"
import { Link } from "react-router-dom";
import GetLocation from "../../components/GetLocation/GetLocation";

const Mainpage = () => {

  return (
    <>
      <div className={styles.Mainpage}>
        {/*<GetLocation />*/}
        <Header />
        <section className={styles.heroSection}>
          <div className={styles.textWrapper}>
            <h1 className={styles.mainTitle}>
              YOUR <span className={styles.underline}>CULINARY</span>
              <br />
              ASSISTANT
            </h1>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/mainpage/dump1.png"
              alt="dump"
              className={styles.heroImage}
            />
          </div>
          <p className={styles.subtitle}>
            Discover recipes, share yours, explore the world's flavors
          </p>
        </section>

        <section className={styles.section2}>
          <div className={styles.left_section2}>
            <div className={styles.giant_text}>
              <div className={styles.red_giant_text}>READY</div>
              <div className={styles.text_under_red}>TO EXPLORE?</div>
            </div>
            <div className={styles.cards_section2}>
              <div className={styles.map_card}>
                <img src="/mainpage/arrow.svg" alt="arrow" className={styles.arrow} />
                <div className={styles.card_white_text}>NATIONAL DISHES</div>
              </div>
              <div className={styles.two_cards}>
                <div className={styles.categories_card_blue}>
                  <Link className={styles.link} to="/categories">
                    <img src="/mainpage/arrow.svg" alt="arrow" className={styles.arrow2} />
                  </Link>
                  <div className={styles.two_card_white_text}>
                    <Link className={styles.link} to="/categories">
                      CATEGORIES
                    </Link>
                  </div>
                </div>
                <div className={styles.categories_card_yellow}>
                  <Link className={styles.link} to="/categories">
                    <img src="/mainpage/arrow.svg" alt="arrow" className={styles.arrow2} />
                  </Link>
                  <div className={styles.two_card_white_text}>
                    <Link className={styles.link} to="/categories">
                      CATEGORIES
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right_section2}>
            <img className={styles.dump2} src="/mainpage/dump2.png" alt="dump2"></img>
          </div>
        </section>

        <section className={styles.section3}>
          <div className={styles.red_section_wrapper}>
            <div className={styles.left_red_section}>
              <div className={styles.big_random_text}>RANDOM</div>
              <div className={styles.red_section_smaller_text}>
                can’t decide? 
                <div className={styles.red_section_smaller_text}>
                let us surprise you!
                </div>
              </div>
              <div className={styles.yellow_random_button}>START</div>
            </div>
            <div className={styles.right_red_section}>
              <div className={styles.cardsContainer}>
                <div className={`${styles.card} ${styles.cardLeft}`}>
                  <Card image="/mainpage/randimage1.jfif" />
                </div>
                <div className={`${styles.card} ${styles.cardCenter}`}>
                  <Card image="/mainpage/randimage2.jfif" />
                </div>
                <div className={`${styles.card} ${styles.cardRight}`}>
                  <Card image="/mainpage/randimage3.jfif" />
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.carrousel}>
          <Carrousel  />

        </section>

        <Footer />
      </div>
    </>
  );
};

export default Mainpage;
