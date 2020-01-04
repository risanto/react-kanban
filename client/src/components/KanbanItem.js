import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class KanbanItem extends Component {
  constructor() {
    super()
    this.state = {
      deleteIconIsActive: false
    }
  }

  handleMouseEnter = () => {
    this.setState({ deleteIconIsActive: true })
  }

  handleMouseLeave = () => {
    this.setState({ deleteIconIsActive: false})
  }

  render() {
    return (
      <div
        id={`${this.props.taskId}-${this.props.taskCategory}`}
        draggable
        onDragStart={this.props.onDragStart}

        className="draggable mx-3 pt-5"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        >
        <div
          className="flex text-gray-800 shadow"
          >
          <span
            className={`${this.props.headerColor} inline-block h-full flex-initial py-2`}
            >&nbsp;</span>
          <h4 
            className="inline-block ml-auto flex items-center justify-center flex-1 cursor-move relative"
            >
            {this.props.taskTitle}
            {
              this.state.deleteIconIsActive 
                ? <FontAwesomeIcon
                    className="text-red-500 mb-3 mr-3 absolute right-0"
                    id={this.props.taskId}
                    onClick={this.props.deleteKanbanItem} 
                    icon={faTrashAlt} 
                    role="button"
                  />
                : null
            }
          </h4>
        </div>
      </div>
    )
  }
}

export default KanbanItem