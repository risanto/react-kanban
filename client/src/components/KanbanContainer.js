import React, { Component } from 'react'
import KanbanItem from './KanbanItem'

class KanbanContainer extends Component {
  renderKanbanItems() {
    return this.props.tasks.map(task => {
      return (
        <KanbanItem
          onDragStart={this.props.onDragStart}
          deleteKanbanItem={this.props.deleteKanbanItem} 

          key={task.id} 
          taskId={task.id}
          
          headerColor={this.props.headerColor}
          taskCategory={this.props.headerText.toLowerCase()} 
          taskTitle={task.title} 
        />
      )
    })
  }

  render() {
    return (
      <div
        id={this.props.headerText.toLowerCase()}
        onDragOver={this.props.onDragOver}
        onDrop={this.props.onDrop} 
        className="max-w-sm min-w-full mx-3 md:min-w-1/4 mb-5 flex-col bg-white rounded-lg shadow"
        >
        <div
          className={`${this.props.headerColor} h-10 w-full rounded text-white flex items-center p-3`}
          ><strong>{this.props.headerText}</strong></div>
        <div
          className="pb-6"
          >
          {this.renderKanbanItems()}
        </div>

      </div>
    )
  }
}

export default KanbanContainer