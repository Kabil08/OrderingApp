import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cn from "classnames";

const ReceipeInfo = () => {
    const [receipeInfo, setReceipeInfo] = useState(null);

    const { id } = useParams();

    const getReceipeInfo = async () => {
        const data = await fetch(`https://dummyjson.com/recipes/${id}`);
        const result = await data.json();

        setReceipeInfo(result);
    }

    useEffect(() => {
        getReceipeInfo();
    }, []);

    const { image, name, cuisine, ingredients, instructions=[], rating, cookTimeMinutes, difficulty } = receipeInfo || {};

    return (
        <div className="receipeInfo">
            <div className={cn("imageAndCookTimeContainer", "imageWidthContainer")}>
                <img
                    src={image}
                    alt='receipeImage'
                    className="receipeInfoImage"
                />
            </div>
            <div className="receipeBody">
                <div className="receipeInfoName">{`${name} (${cuisine} ⭐${rating})`}</div>
                <div className="receipeInfoText">
                    <b>Difficult:</b> {difficulty}
                </div>
                <div className="receipeInfoIngredient">
                    <div className="receifeInfoIngredientText">Ingredients: </div>
                    <div>{ingredients?.join(", ")}</div>
                </div>
                <div className="receipeInfoText">
                    <div className="instructionText">Instructions:</div>
                    {instructions.map(ins => (
                        <div>🚀 {ins}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ReceipeInfo;