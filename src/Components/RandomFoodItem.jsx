import styles from './randomFoodItem.module.css'
export default function FoodItem({ food }) {
    return (
        <div>
            <div className={styles.foodContainer}>
                <img src={food.strCategoryThumb} />
                <p className={styles.foodName}>{food.strCategory}</p>
            </div>

        </div>
    )
}