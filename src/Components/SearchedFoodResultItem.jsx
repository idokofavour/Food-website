export default function SearchedFoodResultItem({item}) {
    return(
    <div>
        <img src={item.strMealThumb} alt="" />
        <p>{item.strMeal}</p>
    </div>
    )
}