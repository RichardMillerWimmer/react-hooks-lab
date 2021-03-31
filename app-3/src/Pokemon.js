import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pokemon(props) {
    const { name } = props.match.params;
    const [pokemon, setPokemon] = useState({});
    console.log('test')

    useEffect(() => {
        console.log("test");
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                console.log(res.data)
                setPokemon(res.data)
            })
    }, [])

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        </div>
    )

};

export default Pokemon;