import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
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

    const onClickTopRatedReceipes = () => {
        const resultedReceipes = receipeList.filter((r) => r.rating > 4.8);
        setFilteredReceipe(resultedReceipes);
        setSearchValue("");
    }


    return (
        <div>
            <div className="flex m-5">
                <div>
                    <input 
                        type="text"
                        className="w-63 h-7 rounded border-2 border-solid border-custom-gray"
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
                        className="rounded border-2 border-solid border-custom-gray h-7 cursor-pointer"
                    >
                        🔍
                    </button>
                </div>
                <div>
                    <button onClick={onClickTopRatedReceipes} className="ml-8 rounded border-2 border-solid border-custom-gray">
                        <span className="mx-3">Top-rated receipes</span>
                    </button>
                </div>
            </div>
            {receipeList.length === 0 ? (
                <div>Loading...</div>
            ): (
                <div className="flex flex-wrap">
                    {filteredReceipe.map((data) => (
                        <Link to={`/receipe/${data?.id}`}>
                            <ReceipeCard receipeData={data} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Body;