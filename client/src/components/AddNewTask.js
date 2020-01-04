import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class AddNewTask extends Component {
  render () {
    return (
      <div>
        <FontAwesomeIcon 
          icon={faTimes} 
          className="text-white mr-3" 
          role="button" 
          onClick={this.props.onClick} 
          />
        <input
          onKeyPress={this.props.handleKeyPress} 
          className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" 
          />
      </div>
    )
  }
}

export default AddNewTask