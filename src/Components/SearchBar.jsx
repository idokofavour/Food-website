import { useEffect, useState } from "react"
import styles from './searchBar.module.css'
import RandomFoodList from "./RandomFoodList"
export default function SearchBar({query, setQuery, foodData, setFoodData, setFoodId, foodId }) {
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(()=> {
        if(query==="") {
            setIsLoading(true)
            async function fetchRandomFood() {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=American`)
                const data = await res.json()
                console.log(data.meals)
                setIsLoading(false)
                setFoodData(data.meals)
            }
            fetchRandomFood()
        } else {
            async function fetSingleFood() {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
                const data = await res.json()
                console.log(data.meals)
               setFoodData(data.meals)
            }
            fetSingleFood()
        }
        
    }, [query])
    if(isLoading){
        return (
            <div className={styles.isLoadingContainer}>
               <h2 className={styles.isLoading}>Page is Loading...</h2> 
            </div>
        )
    } else {

        return (
            <div>
                <div className={styles.inputContainer}>
                    <input className={styles.input} type="text" value={query}  onChange={(e)=> setQuery(e.target.value)} />
                </div>
                < RandomFoodList foodData={foodData} foodId={foodId} setFoodId={setFoodId} />
            </div>
        )

    }
}