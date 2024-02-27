import RandomFoodItem from "./RandomFoodItem";
import styles from './randomFoodList.module.css'

export default function RandomFoodList({ foodData, foodId, setFoodId }) {
    return (
        <div className={styles.parent}>
            {foodData.map((food) => 
            <RandomFoodItem key={food.idCategory} food={food} foodId={foodId} setFoodId={setFoodId} /> 
            )}
        </div>
    )
}