import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <button
        className="inline-block text-sm px-4 py-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white md:mt-0"
        onClick={this.props.onClick}
        >{this.props.actionText}</button>
    )
  }
}

export default Button