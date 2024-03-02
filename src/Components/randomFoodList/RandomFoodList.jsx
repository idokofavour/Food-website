import SearchErrorHandling from "../errorHandling/SearchErrorHandling";
import FoodItem from "../randomFoodItems/RandomFoodItem";
import styles from './randomFoodList.module.css'

export default function RandomFoodList({ foodData, foodId, setFoodId }) {
    if(foodData===null) {
        return(
            <SearchErrorHandling />
        )
    }
    return (
        <div className={styles.parent}>
            {foodData.map((food) => 
            <FoodItem key={food.idMeal} food={food} foodId={foodId} setFoodId={setFoodId} /> 
            )}
        </div>
    )
}