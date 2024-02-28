import { useState } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'
import { Route, Routes } from "react-router-dom";
import FoodRecipe from './Components/FoodRecipe'


function App() {
  const [query, setQuery] = useState("")
  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState(52855)


  return (
      <div>

          

          
        <Routes>
          <Route path='/' element={
          <SearchBar query={query} setQuery={setQuery} foodData={foodData} 
          setFoodData={setFoodData} foodId={foodId} setFoodId={setFoodId} />
          } />
          <Route path='/FoodRecipe' element={<FoodRecipe foodId={foodId}/>} />
        </Routes>



       










    </div>
  )
}

export default App
