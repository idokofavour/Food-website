import styles from './randomFoodItem.module.css'
import {Routes, Route, useNavigate} from 'react-router-dom'

export default function FoodItem({ food, foodId, setFoodId }) {
    const navigate = useNavigate()
    return (
        <div>
            <div className={styles.foodContainer}>
                <img className={styles.image} src={food.strMealThumb} />
                <p className={styles.foodName} onClick={()=> {
                    console.log(food.idMeal)
                    setFoodId(food.idMeal)
                    navigate('/FoodRecipe')
                }}>{food.strMeal}</p>
            </div>

        </div>
    )
}