import React, {useState} from 'react'
import PropTypes from 'prop-types';

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: e => setValue(e.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodos({ onCreate }){
    const input = useInputValue('')
    
    function sumbmitHandler(e){
        e.preventDefault()

        if(input.value().trim()){
            onCreate(input.value())
            input.clear()
        }
    }
    return (
        <form onSubmit={sumbmitHandler}>
            <input {...input.bind}/>
            <button type="submit">Add Todo</button>
            { input.value().length === 0 ? null : <p>{input.value()}</p>}
        </form>
    )
}

AddTodos.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddTodos