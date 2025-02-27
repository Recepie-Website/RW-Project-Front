import { React, useState, useEffect } from "react";
import styles from "./carrousel.module.css";
import { Link } from "react-router-dom";

/*const recipes = [
        { img: "/LastRecepies/1.png", name: "Pasta with mushrooms", link: "#" },
        { img: "/LastRecepies/2.png", name: "Pancakes with fruits", link: "#" },
        { img: "/LastRecepies/3.png", name: "Pasta with shrimps", link: "#" },
        { img: "/LastRecepies/4.png", name: "Casseroles", link: "#" },
        { img: "/LastRecepies/5.png", name: "Pancakes with eggplant", link: "#" },
        { img: "/LastRecepies/6.png", name: "Fried potatoes", link: "#" },
        { img: "/LastRecepies/7.png", name: "Oatmeal pancake", link: "#" },
        { img: "/LastRecepies/8.png", name: "Salmon", link: "#" },
        { img: "/LastRecepies/9.png", name: "Oatmeal", link: "#" },
        { img: "/LastRecepies/10.png", name: "Cheese pancakes", link: "#" },
        { img: "/LastRecepies/11.png", name: "Rice with vegetables", link: "#" },
        { img: "/LastRecepies/12.png", name: "Vatrushky", link: "#" },
        { img: "/LastRecepies/13.png", name: "Caesar", link: "#" },
        { img: "/LastRecepies/14.png", name: "Grandmother's pancakes", link: "#" },
        { img: "/LastRecepies/15.png", name: "Homemade pizza", link: "#" },
        { img: "/LastRecepies/16.png", name: "Manty", link: "#" },
        { img: "/LastRecepies/17.png", name: "Khachapuri", link: "#" },
        { img: "/LastRecepies/18.png", name: "Homemade croissants", link: "#" },
        { img: "/LastRecepies/19.png", name: "Greek salad", link: "#" },
        { img: "/LastRecepies/20.png", name: "Granola with fruits", link: "#" },
    ];*/


const Carrousel = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipes = async () => {
        try {
            const response = await fetch('http://94.231.178.180:3001/api/recipes/getlast20');
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }
            const data = await response.json();
            setRecipes(data);
            console.log("fetched recipes:\n\n", data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        } finally {
            setLoading(false);
        }
        };

        fetchRecipes();
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const totalItems = recipes.length;
    const visibleItems = 4;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < visibleItems; i++) {
            items.push(recipes[(currentIndex + i) % totalItems]);
        }
        return items;
    };
    
   if (loading) {
        return <p>Loading recipes...</p>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Last Recepies
            </div>
            <div className={styles.carrousel}>
                <div className={styles.track}>
                    {getVisibleItems().map((item, index) => (
                        <div className={styles.item} key={index}>
                            <img src={item.image_url} alt={item.title} />
                            <p>{item.title}</p>
                            <Link 
                            to={item.link} 
                            rel="noopener noreferrer" 
                            className={styles.moreButton}  
                            style={{ backgroundColor: index % 2 === 0 ? "#7A90FF" : "#FFD753" }}
                        >
                            <span className={styles.arrow}>&#8599;</span>
                        </Link>
                        </div>
                    ))}
                </div>
                <button className={`${styles.carrouselButton} ${styles.left}`} onClick={prevSlide}>
                    &lt;
                </button>
                <button className={`${styles.carrouselButton} ${styles.right}`} onClick={nextSlide}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Carrousel;
