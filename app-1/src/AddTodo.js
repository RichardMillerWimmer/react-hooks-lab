import React, { useState, useEffect } from 'react';

function AddTodo() {
    const [userTodo, setUserTodo] = useState('');

    function addUserTodo() {

    }

    return (
        <div>
            <input placeholder='your todo' value={userTodo} onChange={event => setUserTodo(event.target.value)} />
            <button onClick={addUserTodo}>Add Todo</button>
        </div>
    )
}