import { useEffect, useState } from "react"
import styles from './searchBar.module.css'

export default function SearchBar({query, setQuery, setFoodData, setSingleFoodData }) {
    // const [query, setQuery] = useState("")

    
    useEffect(()=> {
        if(query==="") {
            const randomFoodUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php'
            async function fetchRandomFood() {
                const res = await fetch(`${randomFoodUrl}`)
                const data = await res.json()
                console.log(data.categories)
                setFoodData(data.categories)
            }
            fetchRandomFood()
        } else {
            const singleFoodUrl= 'https://www.themealdb.com/api/json/v1/1/search.php'
            async function fetSingleFood() {
                const res = await fetch(`${singleFoodUrl}?s=${query}`)
                const data = await res.json()
                console.log(data.meals)
                // console.log(data)
                setSingleFoodData(data.meals)
            }
            fetSingleFood()
        }
        
    }, [query])
    return (
        <div className={styles.inputContainer}>
            <input className={styles.input} type="text" value={query}  onChange={(e)=> setQuery(e.target.value)} />
        </div>
    )
}