import styles from './randomFoodItem.module.css'
import {Routes, Route, useNavigate} from 'react-router-dom'
import textTransformPipe from '../utils/utils'

export default function FoodItem({ food, foodId, setFoodId }) {
    const navigate = useNavigate()
    return (
        <div>
            <div className={styles.foodContainer} onClick={()=> {
                    setFoodId(food.idMeal)
                    navigate('/FoodRecipe')
                }}>
                <img className={styles.image} src={food.strMealThumb} />

                <p className={styles.foodName}>{textTransformPipe(food.strMeal, 20)}</p>
            </div>
        </div>
    )
}