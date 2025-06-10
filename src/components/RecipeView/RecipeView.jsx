import React, { useEffect, useState } from 'react';
import styles from './RecipeView.module.css';

const API_URL = process.env.REACT_APP_API_URL;

const RecipeView = ({ recipeId, onClose }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`${API_URL}/api/recipes/${recipeId}`);
        const data = await res.json();
        setRecipe(data);
      } catch (err) {
        console.error("Error loading recipe:", err);
      }
    };

    if (recipeId) fetchRecipe();
  }, [recipeId]);

  if (!recipe) return <div className={styles.overlay}><div>Loading...</div></div>;

  const ingredientsList = recipe.ingredients?.split(',') || [];

  return (
    <div className={styles.overlay}>
      <div className={styles.recipeView}>
        <div className={styles.imageBox}>
          <img src={recipe.image_url || "/images/placeholder.png"} alt={recipe.title} />
          <div className={styles.recipeName}>{recipe.title}</div>
        </div>
        <div className={styles.info}>
          <div className={styles.close} onClick={onClose}>✕</div>

          <label className={styles.orange}>Description</label>
          <p className={styles.text}>{recipe.description}</p>

          <label className={styles.orange}>Ingredients</label>
          <ul className={styles.ingredients}>
            {ingredientsList.map((item, i) => (
              <li key={i}>{item.trim()}</li>
            ))}
          </ul>

          <div className={styles.categories}>
            {recipe.category && <span>{recipe.category}</span>}
            {recipe.cuisine && <span>{recipe.cuisine}</span>}
          </div>

          <button className={styles.saveButton}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeView;
