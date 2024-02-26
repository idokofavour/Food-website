import RandomFoodItem from "./RandomFoodItem";
import styles from './randomFoodList.module.css'

export default function RandomFoodList({ foodData }) {
    return (
        <div className={styles.parent}>
            {foodData.map((food) => 
            <RandomFoodItem key={food.idCategory} food={food} /> 
            )}
        </div>
    )
}