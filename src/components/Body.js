import React, {useEffect, useState} from "react";
import ReceipeCard from "./ReceipeCard";


const Body = () => {

    const [receipeList, setReceipeList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [filteredReceipe, setFilteredReceipe] = useState([]);

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
        setFilteredReceipe(recipes);
    }

    const onClickSearch = () => {
        const filValues = receipeList.filter((r) => r.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredReceipe(filValues);
    }


    return (
        <div>
            <div className="receipeToolbar">
                <div>
                    <input 
                        type="text"
                        className="searchReceipe"
                        placeholder="What do you want to cook today?"
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                onClickSearch();
                            }
                        }}
                    />
                    <button 
                        onClick={onClickSearch}
                        className="searchButton"
                    >
                        🔍
                    </button>
                </div>
                {/* <div>
                    <button className="topRatedReceipes">
                        Top-rated receipes
                    </button>
                </div> */}
            </div>
            {receipeList.length === 0 ? (
                <div>Loading...</div>
            ): (
                <div className="receipeList">
                    {filteredReceipe.map((data) => (
                        <ReceipeCard receipeData={data} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Body;