import React from 'react';
import './FoodDetelais.css'

const FoodDetelais = ({meal}) => {
    console.log(meal)
    let image;
    let name;
  for (const food of meal) {
        image=food.strMealThumb
        name =food.strMeal
  }
    return (
        <div className='add-food'>
            <h5>How much order food:{meal.length}</h5>
            <img className='w-50'src={image} alt="" />
            <h4>Name:{name}</h4>
        </div>
    );
};

export default FoodDetelais;