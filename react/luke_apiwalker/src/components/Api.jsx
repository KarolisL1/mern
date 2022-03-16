import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";

const Api = () => {

    const {type, id} = useParams();

    const [data, setData] = useState([]);

    const [homeworld, setHomeworld] = useState({});

    let [checked, setChecked] = useState(false);

    // const [keys, setKeys] = useState([]);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then((response) => {
                setData(response.data);
                // setKeys(Object.keys(response.data));
                console.log(response.data);
                // console.log(Object.keys(response.data));
                
                if (type === "people"){
                    axios.get(response.data.homeworld)
                    .then((response) => {
                        setHomeworld(response.data);
                        // setKeys(Object.keys(response.data));
                        console.log(response.data);
                        // console.log(Object.keys(response.data));
                    })
                    .catch((err) => {
                        console.log("errros in making the request", err);
                        // setChecked(true);
                    })
                }


            })
            .catch((err) => {
                console.log("errros in making the request", err);
                setChecked(true);
            })
    }, [type, id])

    // const request = () => {
    //         axios.get(`https://swapi.dev/api/${type}/${id}`)
    //             .then((response) => {
    //                 setHomeworld(response.data);
    //                 // setKeys(Object.keys(response.data));
    //                 console.log(response.data);
    //                 // console.log(Object.keys(response.data));
    //             })
    //             .catch((err) => {
    //                 console.log("errros in making the request", err);
    //                 // setChecked(true);
    //             })

    return (
        <>
            {/* <h2>{data.name}</h2>
            <p>Height: {data.height} cm</p>
            <p>Mass: {data.mass} kg</p>
            <p>Hair Color: {data.hair_color}</p>
            <p>Skin Color: {data.skin_color}</p> */}
            {(checked)? <div>
                <p>These are not the droids you're looking for</p>
                <img src="https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg" width="200px" height="200px"></img>
                </div>:
                <div>
                    {
                            (type === "people"? 
                                <div>
                                    <h2>{data.name}</h2>
                                    <p>Height: {data.height} cm</p>
                                    <p>Mass: {data.mass} kg</p>
                                    <p>Hair Color: {data.hair_color}</p>
                                    <p>Skin Color: {data.skin_color}</p>
                                    <p>Homeworld: {homeworld.name}</p>
                                </div>: 
                                    <div>
                                        <h2>{data.name}</h2>
                                        <p>Climate: {data.climate}</p>
                                        <p>Terrain: {data.terrain}</p>
                                        <p>Surface Water: {data.surface_water}</p>
                                        <p>Populiation: {data.population}</p>
                                    </div>
                            )
                    }
                </div>
            }
        </>
    )
}

export default Api;