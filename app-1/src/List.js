import React from 'react';
import Todo from './Todo';

function List(props) {

    return (
        <div>
            {props.todos.map((elem, i) => {
                return <Todo todo={elem} key={i} />
            })}
        </div>
    )
}

export default List;