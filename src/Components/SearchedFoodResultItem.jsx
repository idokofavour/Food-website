import styles from './searchedFoodResultItem.module.css'
export default function SearchedFoodResultItem({item}) {
    return(
    <div className={styles.foodContainer}>
        <img className={styles.image} src={item.strMealThumb} alt="" />
        <p className={styles.foodName}>{item.strMeal}</p>
    </div>
    )
}