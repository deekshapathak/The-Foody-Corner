import {React, useState,useEffect} from 'react'
import Recipe from './Recipe'
import './App.css'


const App = () =>{
 const App_id = "4dfc8334"
 const App_key = "64051705909ffa8225fc4c886d6b9e53"




   const [query,setQuery] = useState('icecream')
   const [search,setSearch] = useState('')
   const[recipes,setRecipes] = useState([])


   useEffect(()=>{
     getRecipes()// check this
   },[query])

   //console.log(query)

const getRecipes = async ()=>{
   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`)
   const data = await response.json()
   console.log(data) 
   setRecipes(data.hits)

}


  
  const getSearch = e=>{
    e.preventDefault()
    console.log("is this running ")
    setQuery(search)
    setSearch("")
  }

 return(
    <div className='App'>
      <form className='search-form' onSubmit={getSearch}>
     <input type="text" className="search-bar" value={search} onChange={e=>setSearch(e.target.value)} />
     <button type="submit" className="search-button">Search</button>
     </form> 

     <div class='recipes'>
     {recipes.map(recipe =>(
      // console.log(recipe.recipe.label)
      <Recipe 
      title={recipe.recipe.label}
      key={recipe.recipe.label}
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}

      />

     ))}
     </div>
    </div>
 )


}

export default App

