import React, {useEffect, useState} from "react";
import ReceipeCard from "./ReceipeCard";


const Body = () => {

    const [receipeList, setReceipeList] = useState([]);

    console.log("RENDERRRR");
    console.log(receipeList, "TIMES");

    useEffect(() => {
        // fetch('https://dummyjson.com/recipes')
        // .then(res => res.json())
        // .then(console.log);

        getReceipeList();
    }, []);

    const getReceipeList = async () => {
        const res = await fetch('https://dummyjson.com/recipes');
        const result = await res.json();
        const { recipes } = result;

        setReceipeList(recipes);
    }


    return (
        <div>
            {receipeList.length === 0 ? (
                <div>Loading...</div>
            ): (
                <div className="receipeList">
                    {receipeList.map((data) => (
                        <ReceipeCard receipeData={data} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Body;