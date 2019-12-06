import React from 'react';
import PropsTypes from 'prop-types';
import Context from '../context'

function TodoItem({ todo,id,title,onChange,index }){
    const { removeTodo } = React.useContext(Context)
    const classes = []
    if(todo.completed){
        classes.push('done')
    }
    return (
    <li>
     <span className={classes.join``}>
     <input type="checkbox" checked={todo.completed} onChange={()=> onChange(id)}/>
     <strong>{index + 1}</strong>
     &nbsp;
     {title}
     </span> 
     <button className="delete" onClick={removeTodo.bind(null,id)}>&times;</button>
     </li>
    )}

TodoItem.propTypes = {
    id: PropsTypes.number,
    title: PropsTypes.string.isRequired,
    onChange: PropsTypes.func.isRequired
}

export default TodoItem