import React, { useState } from 'react';

function AddTodo(props) {
    const [userTodo, setUserTodo] = useState('');

    function handleAdd() {
        props.addTodo(userTodo);
        setUserTodo('')
    }

    return (
        <div>
            <input placeholder='your todo' value={userTodo} onChange={event => setUserTodo(event.target.value)} />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    )
}

export default AddTodo;