import { useEffect, useState } from "react"
import styles from './searchBar.module.css'
import RandomFoodList from "./RandomFoodList"

export default function SearchBar({query, setQuery, foodData, setFoodData, setFoodId, foodId }) {
    
    useEffect(()=> {
        if(query==="") {
            const randomFoodUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=American '

            async function fetchRandomFood() {
                const res = await fetch(`${randomFoodUrl}`)
                const data = await res.json()
                console.log(data.meals)
                setFoodData(data.meals)
            }
            fetchRandomFood()
        } else {
            const singleFoodUrl= 'https://www.themealdb.com/api/json/v1/1/search.php'
            async function fetSingleFood() {
                const res = await fetch(`${singleFoodUrl}?s=${query}`)
                const data = await res.json()
                console.log(data.meals)
               setFoodData(data.meals)
            }
            fetSingleFood()
        }
        
    }, [query])
    return (
        <div>
        <div className={styles.inputContainer}>
            <input className={styles.input} type="text" value={query}  onChange={(e)=> setQuery(e.target.value)} />
        </div>
          < RandomFoodList foodData={foodData} foodId={foodId} setFoodId={setFoodId} />: 
        </div>
    )
}