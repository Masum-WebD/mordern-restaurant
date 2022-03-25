import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import './App.css';
import FoodDetelais from './components/FoodDetelais/FoodDetelais';
import Menubar from './components/Menubar/Menubar';
import Recipe from './components/Recipe/Recipe';

function App() {
  const [meals,setMeals]=useState([])
  const [addmeal,setMeal]=useState([])
  useEffect(() =>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json())
    .then(data => setMeals(data.meals))
  },[])
  const addToOrder =(meal)=>{
    const newMeals = [...addmeal ,meal]
    setMeal(newMeals);
}
  return (
    <div className="App">
        <Menubar></Menubar> 
        <div className="row">
            <div className=" row col-md-8">
                {
                    meals.map(meal =><Recipe meal={meal} addToOrder={addToOrder} key={meal.idMeal}></Recipe>)
                  }
            </div>
            <div className="col-md-4 order-summary">
                <FoodDetelais meal={addmeal}></FoodDetelais>
          </div>
        </div>
       
      
    </div>
  );
}

export default App;
