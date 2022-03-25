import React from 'react';
import './Recipe.css'

const Recipe = ({addToOrder,meal}) => {
    const {strMeal,strInstructions,strMealThumb}=meal;
    

    return (
       
            <div className="col-md-6 mt-4">
                <div className="card h-100">
                   <img src={strMealThumb} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{strMeal}</h5>
                            <p className="card-text">{strInstructions.slice(0,100)}</p>
                        </div>
                        <button onClick={() =>addToOrder(meal)} className='btn-for-order'>Order</button>
                </div>
            </div>
      
    );
};

export default Recipe;