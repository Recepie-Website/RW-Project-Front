import React, { useState } from "react";
import Card from "../Card/Card";
import RecipeView from "../RecipeView/RecipeView";
import styles from "./randomimage.module.css";

const API_URL = process.env.REACT_APP_API_URL;

const fallbackImages = [
  { src: "/images/image1.png", title: "Borscht" },
  { src: "/images/image2.png", title: "Varenyky" },
  { src: "/images/image3.png", title: "Deruny" },
];

function getThreeRandomImages() {
  const shuffled = [...fallbackImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

const RandomCardSet = () => {
  const [images, setImages] = useState(getThreeRandomImages());
  const [animating, setAnimating] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleRandomize = async () => {
    setAnimating(true);
    try {
      const response = await fetch(`${API_URL}/api/random-recipe`);
      const data = await response.json();

      const newImages = [
        fallbackImages[0],
        {
          src: data.image_url || "/images/placeholder.png",
          title: data.title || "Unknown recipe",
          recipe_id: data.recipe_id,
        },
        fallbackImages[2],
      ];

      setTimeout(() => {
        setImages(newImages);
        setAnimating(false);
      }, 2000);
    } catch (error) {
      console.error("Fetch error:", error);
      setAnimating(false);
    }
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className={styles.red_section_wrapper}>
      <div className={styles.left_red_section}>
        <div className={styles.big_random_text}>RANDOM</div>
        <div className={styles.red_section_smaller_text}>
          Can’t decide? Let us surprise you!
        </div>
        <button className={styles.yellow_random_button} onClick={handleRandomize}>
          Start
        </button>
      </div>

      <div className={styles.right_red_section}>
        <div className={styles.cardsContainer}>
          {images.map((item, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                index === 0
                  ? styles.cardLeft
                  : index === 1
                  ? styles.cardCenter
                  : styles.cardRight
              } ${animating ? styles.move : ""}`}

              onClick={() => {
                if (index === 1) {
                  setSelectedRecipeId(item.recipe_id);
                  openModal();
                }
              }}
              role={index === 1 ? "button" : undefined}
              tabIndex={index === 1 ? 0 : undefined}
              onKeyDown={(e) => {
                if (e.key === "Enter" && index === 1) {
                  setSelectedRecipeId(item.recipe_id);
                  openModal();
                }
              }}
              style={{ cursor: index === 1 ? "pointer" : "default" }}
            >
              <Card image={item.src} />
              {index === 1 && <div className={styles.cardTitle}>{item.title}</div>}
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedRecipeId && (
        <RecipeView recipeId={selectedRecipeId} onClose={closeModal} />
      )}
    </div>
  );
};

export default RandomCardSet;
