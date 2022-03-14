import React, {useState} from "react";
import axios from "axios";


const Pokemon = () => {

    let [pokemon, setPokemon] = useState([]);

    const getPokemonFromApi = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then((response) => {
                setPokemon(response.data.results);
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