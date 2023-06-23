import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  render() {
    const {list, key, deleteTodo} = this.props
    const {title, id} = list
    const onDelete = () => deleteTodo(id)

    return (
      <div className="tain-1">
        <p className="content">{title}</p>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    )
  }
}

export default TodoItem
