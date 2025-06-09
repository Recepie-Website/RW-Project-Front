import React, { useState } from 'react';
import styles from './Recipe.module.css';
import { Link } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

const AddRecipeWithImage = ({ onClose }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [ingredients, setIngredients] = useState(['']);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImageFile(file); // save the file itself

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result); // just for preview
    };
    reader.readAsDataURL(file);
  };


  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleIngredientChange = (index, value) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  const handleSubmit = async () => {
    if (!title || !category || !cuisine) {
      alert("Please fill required fields: Title, Category, Cuisine");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('cuisine', cuisine);
      formData.append('ingredients', JSON.stringify(ingredients.filter((ing) => ing.trim() !== '')));

      if (imageFile) {
        formData.append('image', imageFile); // important! use 'image' or the field your backend expects
      }

      //test
      for (let pair of formData.entries()) {
        console.log(pair[0]+ ':', pair[1]);
      }

      const response = await fetch(`${API_URL}/api/recipes/add`, {
        method: 'POST',
        credentials: 'include',
        body: formData, // no need to set Content-Type here — browser will do it
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add recipe");
      }

      alert("Recipe added successfully!");
      console.log("Recipe added:", data);

      // reset form
      setTitle('');
      setDescription('');
      setCategory('');
      setCuisine('');
      setImagePreview(null);
      setImageUrl('');
      setImageFile(null);
      setIngredients(['']);

      if (typeof onClose === 'function') {
        onClose();
      }

    } catch (err) {
      alert("Error adding recipe: " + err.message);
      console.error(err);
    }
  };


  return (
    <div
      className={styles.backdrop}
      onClick={() => {
        if (typeof onClose === 'function') {
          onClose();
        }
      }}
    >
      <div className={styles.recipeForm} onClick={(e) => e.stopPropagation()}>
        <div>
          <div
            className={styles.uploadBox}
            onClick={() => document.getElementById('imageInput').click()}
          >
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />

            {imagePreview ? (
              <img src={imagePreview} alt="preview" className={styles.previewImage} />
            ) : (
              <div className={styles.uploadContent} >
                <div className={styles.uploadIcon}>⬆</div>
                <p>
                  drop your image here, or{' '}
                  <span className={styles.browse}>browse</span>
                </p>
              </div>
            )}
          </div>

          <input
            type="text"
            className={styles.recipeName}
            placeholder="ENTER A RECIPE NAME..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={styles.formInfo}>
          <label>Description</label>
          <textarea
            placeholder="l........"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className={styles.ingredients}>
            <label>Ingredients</label>
            <button
              className={styles.plusButton}
              type="button"
              onClick={handleAddIngredient}
            >
              +
            </button>
          </div>

          {ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Ingredient ${index + 1}`}
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              style={{
                border: 'none',
                borderBottom: '1px solid #ccc',
                background: 'transparent',
                fontSize: '13px',
                marginBottom: '8px',
                width: '100%',
              }}
            />
          ))}

          <div className={styles.dropdowns}>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">category</option>
              <option value="Italian">Italian</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
              <option value="Japanese">Japanese</option>
              <option value="Chinese">Chinese</option>
              <option value="Mexican">Mexican</option>
              <option value="Indian">Indian</option>
              <option value="Greek">Greek</option>
              <option value="Ukrainian">Ukrainian</option>
              <option value="Turkish">Turkish</option>
              <option value="Korean">Korean</option>
              <option value="American">American</option>
            </select>

            <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
              <option value="">subcategory</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Main Courses">Main Courses</option>
              <option value="Snacks">Snacks</option>
              <option value="Desserts">Desserts</option>
              <option value="Salads">Salads</option>
              <option value="Vegan Dishes">Vegan Dishes</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>

          <button className={styles.addButton} type="button" onClick={handleSubmit}>
            add
          </button>
        </div>

        <Link to="/profile">
          <div
            className={styles.close} >

            ✕
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AddRecipeWithImage;
