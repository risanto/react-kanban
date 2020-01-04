import React, { Component } from 'react'
import Navbar from './components/Navbar'
import KanbanContainer from './components/KanbanContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [],
      addNewTaskIsActive: false,
      kanbanContainers: [
        { headerColor: 'bg-red-600', headerText: 'Todo', category: 'todo' },
        { headerColor: 'bg-yellow-600', headerText: 'Doing', category: 'doing' },
        { headerColor: 'bg-green-600', headerText: 'Done', category: 'done' }
      ]
    }
  }

  // === Navbar functions ===

  showAddNewTask = () => {
    this.setState({ addNewTaskIsActive: true })
  }

  closeAddNewTask = () => {
    this.setState({ addNewTaskIsActive: false })
  }

  addNewTask = (key, value) => {
    let id

    this.state.tasks.length > 0 
      ? id = this.state.tasks[this.state.tasks.length - 1].id + 1
      : id = 1

    this.setState({
      tasks: this.state.tasks.concat([
        {id, category: key, title: value}
      ])
    })
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (event.target.value.trim().length !== 0) {
        this.addNewTask('todo', event.target.value)
        this.closeAddNewTask()
      }
    }
  }

  // === KanbanContainer & KanbanItem functions ===

  // === Drag & drop ===

  onDragStart = (event) => {
    event.dataTransfer.setData("id", event.currentTarget.id.split('-')[0])
  }

  onDragOver = (event) => {
    event.stopPropagation()
    event.preventDefault()
  }

  onDrop = (event) => {
    event.preventDefault()

    const id = event.dataTransfer.getData('id')
    const category = event.currentTarget.id

    const tasks = this.state.tasks.filter(task => {
      if (Number(task.id) === Number(id)) task.category = category 
      return task
    })

    this.setState({ tasks })
  }

  // === Delete, filter by categories, and render ===

  deleteKanbanItem = (event) => {
    const tasks = this.state.tasks.filter(task => Number(task.id) !== Number(event.currentTarget.id))
    this.setState({ tasks })
  }

  filterTasks = (category) =>
    this.state.tasks.filter(task => task.category === category)

  renderKanbanContainers = () =>
    this.state.kanbanContainers.map((container, index) =>
      <KanbanContainer
        onDragStart={this.onDragStart}
        onDragOver={this.onDragOver}
        onDrop={(event) => this.onDrop(event)}
        deleteKanbanItem={this.deleteKanbanItem} 
        headerColor={container.headerColor} 
        headerText={container.headerText} 
        tasks={this.filterTasks(container.category)} 
        key={index}
        />
      )

  render() {
    return (
      <div>
        <Navbar
          addNewTaskIsActive={this.state.addNewTaskIsActive}
          closeAddNewTask={this.closeAddNewTask}
          showAddNewTask={this.showAddNewTask} 
          handleKeyPress={this.handleKeyPress} 
          />
        <div className="container-draggable flex flex-col md:flex-row m-10">
          {this.renderKanbanContainers()}
        </div>
      </div>
    )
  }
}

export default App