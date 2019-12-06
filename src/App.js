import React, {useEffect} from 'react';
import TodoList from './Todo.js/TodoList';
import Context from './context';
import Loading from './Todo.js/Loader'
import Modal from './Modal/Modal'

const AddTodos = React.lazy(()=> import('./Todo.js/AddTodos'))

function App() {

const [todos,setTodos] = React.useState([])
const [loading, setLoading] = React.useState(true)

useEffect(()=>{
  console.log('ReactJS 2019(Context, Hooks, Lazy, Suspense)')
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(response => response.json())
  .then(todos => {
    setTimeout(()=> {
      setTodos(todos)
      setLoading(false)
    },2000)
    
  })
},[])
function toggleTodo(id){
  setTodos(
    todos.map(item=> {
      if(item.id === id){
        item.completed = !item.completed
      }
      return item
    })
  )
}
function removeTodo(id){
  setTodos(todos.filter(item => item.id !== id))
}
function addTodo(title){
  setTodos(todos.concat([{
    title,
    id: Date.now(),
    completed: false
  }]))
}

  return (
    <Context.Provider value={{removeTodo}}>
    <div className="container">
    <h1>React Tutorial</h1>
        {loading ?  null : <div className='mainContent'>
        <Modal />
        <React.Suspense fallback={<p>Loading....</p>}>
        <AddTodos onCreate={addTodo}></AddTodos>
        </React.Suspense>
        </div>}
        {loading && <Loading />}
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> :  loading ? null :(<p>No Todos!</p>)}
    </div>
    </Context.Provider>
  );
}

export default App;
