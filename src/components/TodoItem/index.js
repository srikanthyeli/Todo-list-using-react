// Write your code here
import './index.css'

const TodoItem = props => {
  const {TodoDetails} = props
  const {id, title} = TodoDetails
  const OnDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="Todo-container">
      <div>
        <h1 className="head-1">{title}</h1>
        <button className="btn-1" type="button" onClick={this.onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
