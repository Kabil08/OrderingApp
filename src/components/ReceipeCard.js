import React from "react";

function Receipe({receipeData}) {
    console.log("KKKKKKKKKKKKKKK");

    const { name, image, rating, ingredients } = receipeData;
    
    return (
        <div className="individualReceipe">
            <div className="receipeContainer">
                <div>{name}</div>
                <div className="imageContainer">
                    <img 
                        src={image}
                        alt='receipeImage'
                        className="receipeImage"
                    />
                </div>
            </div>
        </div>
    )
}

export default Receipe;