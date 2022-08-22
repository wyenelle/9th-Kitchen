import React from "react";
import './food.css'

const Food = ({img}) => (
    <div className="food-container">
        <div className="contain">
        <img src={img} alt='food image ' className="  img-responsive " />
            
        </div><br />
        <p className="text-secondary order-text mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta culpa illo recusandae natus modi corrupti quidem incidunt unde minus quia.
              quasi.
            </p>
    </div>
)

export default Food 