import { useState } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'
import RandomFoodList from './Components/RandomFoodList'
import SearchedFoodResultList from './Components/SearchedFoodResultList'

function App() {
  const [query, setQuery] = useState("")
  const [foodData, setFoodData] = useState([])
  const [singleFoodData, setSingleFoodData] = useState([])
  const [mealId, setMealId] = useState()

  return (
    <div>
       <SearchBar query={query} setQuery={setQuery} setFoodData={setFoodData} setSingleFoodData={setSingleFoodData} />

      { query==="" ? 
          < RandomFoodList foodData={foodData}/>: 
          <SearchedFoodResultList singleFoodData={singleFoodData}/>
      }











       {/* <SearchBar setFoodData={setFoodData} setSingleFoodData={setSingleFoodData} /> */}
       {/* < RandomFoodList foodData={foodData}/>  */}
       {/* <SingleMeal singleFoodData={singleFoodData}/> */}

      {/* < RandomFoodList foodData={foodData}/> */}
      {/* <SingleMeal singleFoodData={singleFoodData} /> */}
    </div>
  )
}

export default App
