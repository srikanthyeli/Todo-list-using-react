// Write your code here
import './index.css'

const TodoItem = props => {
  const {TodoDetails, deleteTodo} = props
  const {id, title} = TodoDetails
  const OnDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="Todo-container">
      <p className="head-1">{title}</p>
      <button className="btn-1" type="button" onClick={OnDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
