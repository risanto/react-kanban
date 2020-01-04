import React, { Component } from 'react'
import Button from './Button'
import AddNewTask from './AddNewTask'

class Navbar extends Component {
  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 px-6 py-3">
        <span
          className="font-bold text-xl text-white"
          >Kanbanify</span>
        {
          this.props.addNewTaskIsActive 
          ? <AddNewTask onClick={this.props.closeAddNewTask} handleKeyPress={this.props.handleKeyPress} /> 
          : <Button actionText={'add new task'} onClick={this.props.showAddNewTask} />
        }
      </nav>
    )
  }
}

export default Navbar