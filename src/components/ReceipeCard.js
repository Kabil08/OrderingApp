import React from "react";

function Receipe({receipeData}) {
    // console.log("KKKKKKKKKKKKKKK");

    const { name, image, rating, ingredients, cookTimeMinutes } = receipeData;
    
    return (
        <div className="individualReceipe">
            {console.log(receipeData)}
            <div className="receipeContainer">
                <div className="imageAndCookTimeContainer">
                    <img 
                        src={image}
                        alt='receipeImage'
                        className="receipeImage"
                    />
                    <div className="cookTime">
                        <span>⏳ {cookTimeMinutes} min</span>
                    </div>
                </div>
                <div className="nameAndRatingContainer">
                    <div className="receipeName">{name}</div>
                    <div className="receipeRating">{rating}⭐</div>
                </div>
                <div className="ingredientsList">
                    <abbr className="abbrStyles" title={ingredients.join(", ")}>
                        {ingredients.join(", ")}
                    </abbr>
                </div>
            </div>
        </div>
    )
}

export default Receipe;