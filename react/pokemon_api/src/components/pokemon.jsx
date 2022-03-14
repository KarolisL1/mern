import React, {useState} from "react";


const Pokemon = () => {

    let [pokemon, setPokemon] = useState([]);

    const getPokemonFromApi = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then((response) => {return response.json()})

            .then((response) => {
                setPokemon(response.results);
            })
            .catch((error) => {
                console.log(error);
            })
    };


    return (
        <>
            <button onClick= {getPokemonFromApi}>Fetch Pokemon</button>
            {
                pokemon.map((pokemon, index) => {
                    return (
                        <div key={index}>
                            <li>{pokemon.name}</li>
                        </div>
                    )
                })
            }
        </>
    )

}
export default Pokemon;