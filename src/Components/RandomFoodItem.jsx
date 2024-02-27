import styles from './randomFoodItem.module.css'
// import {Routes, Route, useNavigate} from 'react-router-dom'

export default function FoodItem({ food, foodId, setFoodId }) {
    // const [navigate, setNavigate] = useNavigate()
    return (
        <div>
            <div className={styles.foodContainer}>
                <img src={food.strCategoryThumb} />
                <p className={styles.foodName} onClick={()=> {
                    console.log(food.idCategory)
                    setFoodId(food.idCategory)
                }}>{food.strCategory}</p>
            </div>

        </div>
    )
}