import styles from './randomFoodItem.module.css'
import {Routes, Route, useNavigate} from 'react-router-dom'

export default function FoodItem({ food, foodId, setFoodId }) {
    const navigate = useNavigate()
    return (
        <div>
            <div className={styles.foodContainer} onClick={()=> {
                    setFoodId(food.idMeal)
                    navigate('/FoodRecipe')
                }}>
                <img className={styles.image} src={food.strMealThumb} />
                <p className={styles.foodName}>{food.strMeal}</p>
            </div>
        </div>
    )
}