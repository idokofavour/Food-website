import SearchedFoodResultItem from "./SearchedFoodResultItem"
import styles from './searchedFoodResultList.module.css'

export default function SearchedFoodResultList({ singleFoodData, foodData }) {
    return(
        <div className={styles.parent}>
            {singleFoodData.map((item)=> 
                <SearchedFoodResultItem key={item.idMeal} item={item} />
            )}
        </div>
    )
}