import React from "react";

const RandomMeal = (props) => {
  console.log("props in ther random meal comp is",props);

    return (
      <div>
      <p>{props.mealProp.meals[0]}</p>


      </div>
     );

}

export default RandomMeal;
