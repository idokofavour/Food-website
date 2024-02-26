import SearchedFoodResultItem from "./SearchedFoodResultItem"
export default function SearchedFoodResultList({ singleFoodData, foodData }) {
    return(
        <div>
            {singleFoodData.map((item)=> 
                <SearchedFoodResultItem key={item.idMeal} item={item} />
            )}
        </div>
    )
}