import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from './foodRecipe.module.css'

export default function FoodRecipe({foodId}) {
    const [food, setFood] = useState({})
    useEffect(()=> {
        async function fetchFoodRecipe() {
            const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
            console.log(foodId)
            const res = await fetch(`${URL}`)
            const data = await res.json()
            setFood(data.meals[0])
        }
        fetchFoodRecipe()
    },[foodId])
    return (
        <div>
            <div className={styles.linkContainer}>
                <Link className={styles.Link} to='/'>Back to Home</Link>
            </div>
            <h3 className={styles.strMeal}>{food.strMeal}</h3>
            <div className={styles.detailsContainer}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={food.strMealThumb} />
                </div>

                <div className={styles.ingredientsContainer}>
                    <h2 className={styles.ingredientsHeader}>Ingredients</h2>
                    <div className={styles.ingredients}>
                        <p>{food.strMeasure1} {food.strIngredient1}</p>
                        <p>{food.strMeasure2} {food.strIngredient2}</p>
                        <p>{food.strMeasure3} {food.strIngredient3}</p>
                        <p>{food.strMeasure4} {food.strIngredient4}</p>
                        <p>{food.strMeasure5} {food.strIngredient5}</p>
                        <p>{food.strMeasure6} {food.strIngredient6}</p>
                        <p>{food.strMeasure7} {food.strIngredient7}</p>
                        <p>{food.strMeasure8} {food.strIngredient8}</p>
                        <p>{food.strMeasure9} {food.strIngredient9}</p>
                        <p>{food.strMeasure10} {food.strIngredient10}</p>
                        <p>{food.strMeasur11} {food.strIngredient11}</p>
                        <p>{food.strMeasure12} {food.strIngredient12}</p>
                        <p>{food.strMeasure13} {food.strIngredient13}</p>
                        <p>{food.strMeasure14} {food.strIngredient14}</p>
                        <p>{food.strMeasure15} {food.strIngredient15}</p>
                        <p>{food.strMeasure16} {food.strIngredient16}</p>
                        <p>{food.strMeasure17} {food.strIngredient17}</p>
                        <p>{food.strMeasure18} {food.strIngredient18}</p>
                        <p>{food.strMeasure19} {food.strIngredient19}</p>
                        <p>{food.strMeasure20} {food.strIngredient20}</p>
                    </div>
                    <div className={styles.instruction}>
                        <h2>Instruction</h2>
                        <p>{food.strInstructions}</p>
                    </div>
                </div>
            </div>
            {console.log(food)}
        </div>
    )
}


