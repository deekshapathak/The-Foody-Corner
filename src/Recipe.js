import React from "react";
import styles from './recipe.module.css'

const Recipe = props =>{
    return (
         <div className={styles.recipe}>
             <h1>{props.title}</h1>
             <ol>
                 {props.ingredients.map(ingredient =>
                    <li>
                             {ingredient.text}
                    </li>)}
             </ol>
             <p>
                 {props.calories}</p>
                 <img src={props.image} alt="" className={styles.image} />
         </div>
    )
}
  

export default Recipe