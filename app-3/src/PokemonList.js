import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function PokemonList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => {
                setList(res.data.results)
            })
    }, [])

    return (
        <div className="App">
            {list.map((elem, i) => {
                return (
                    <Link key={elem.i} to={`/pokemon/${elem.name}`}>
                        <h2>{elem.name}</h2>
                    </Link>
                )
            })}
        </div>
    );
}

export default PokemonList;