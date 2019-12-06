import React from 'react';
import TodoItem from './TodoItem';
import PropsTypes from 'prop-types';

function TodoList(props){
    return (
        <ul>
            {props.todos.map( (item,index) => {
                return <TodoItem todo={item} key={item.id} id={item.id} index={index} title={item.title} onChange={props.onToggle}/>
            })}
        </ul>
    )
}
TodoList.propTypes = {
    todos: PropsTypes.arrayOf(PropsTypes.object).isRequired,
    onToggle: PropsTypes.func.isRequired
}

export default TodoList