import TodoItem from './components/TodoItem'

import {Component} from 'react'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todoDetailsList: initialTodosList,
  }

  deleteTodo = id => {
    const {todoDetailsList} = this.state
    const filteredTodoList = todoDetails.filter(each => each.id !== id)
    this.setState({todoDetailsList: filteredTodoList})
  }
  render() {
    const {todoDetailsList} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Simple Todos</h1>
        <ul className="list-container">
          {todoDetailsList.map(eachTodo => (
            <TodoItem
              TodoDetails={eachTodo}
              key={eachTodo.id}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos