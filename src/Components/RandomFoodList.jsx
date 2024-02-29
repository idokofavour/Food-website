import ErrorBoundary from "./ErrorBoundray";
import RandomFoodItem from "./RandomFoodItem";
import styles from './randomFoodList.module.css'

export default function RandomFoodList({ foodData, foodId, setFoodId }) {
    if(foodData===null) {
        return(
            <ErrorBoundary />
        )
    }
    return (
        <div className={styles.parent}>
            {console.log(foodData)}
            {foodData.map((food) => 
            <RandomFoodItem key={food.idMeal} food={food} foodId={foodId} setFoodId={setFoodId} /> 
            )}
        </div>
    )
}