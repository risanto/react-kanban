(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,a){e.exports=a(23)},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),o=a.n(s),i=a(2),c=a(3),l=a(5),d=a(4),u=a(6),h=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"inline-block text-sm px-4 py-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white md:mt-0",onClick:this.props.onClick},this.props.actionText)}}]),t}(n.Component),p=a(7),m=a(8),b=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{icon:m.a,className:"text-white mr-3",role:"button",onClick:this.props.onClick}),r.a.createElement("input",{onKeyPress:this.props.handleKeyPress,className:"shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text"}))}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"flex items-center justify-between flex-wrap bg-gray-800 px-6 py-3"},r.a.createElement("span",{className:"font-bold text-xl text-white"},"Kanbanify"),this.props.addNewTaskIsActive?r.a.createElement(b,{onClick:this.props.closeAddNewTask,handleKeyPress:this.props.handleKeyPress}):r.a.createElement(h,{actionText:"add new task",onClick:this.props.showAddNewTask}))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).handleMouseEnter=function(){e.setState({deleteIconIsActive:!0})},e.handleMouseLeave=function(){e.setState({deleteIconIsActive:!1})},e.state={deleteIconIsActive:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"".concat(this.props.taskId,"-").concat(this.props.taskCategory),draggable:!0,onDragStart:this.props.onDragStart,className:"mx-3 pt-5",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},r.a.createElement("div",{className:"flex text-gray-800 shadow"},r.a.createElement("span",{className:"".concat(this.props.headerColor," inline-block h-full flex-initial py-2")},"\xa0"),r.a.createElement("h4",{className:"inline-block ml-auto flex items-center justify-center flex-1 cursor-move relative p-3"},this.props.taskTitle,this.state.deleteIconIsActive?r.a.createElement(p.a,{className:"text-red-500 mb-3 mr-3 absolute right-0",id:this.props.taskId,onClick:this.props.deleteKanbanItem,icon:m.b,role:"button"}):null)))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderKanbanItems",value:function(){var e=this;return this.props.tasks.map((function(t){return r.a.createElement(k,{onDragStart:e.props.onDragStart,deleteKanbanItem:e.props.deleteKanbanItem,key:t.id,taskId:t.id,headerColor:e.props.headerColor,taskCategory:e.props.headerText.toLowerCase(),taskTitle:t.title})}))}},{key:"render",value:function(){return r.a.createElement("div",{id:this.props.headerText.toLowerCase(),onDragOver:this.props.onDragOver,onDrop:this.props.onDrop,className:"max-w-sm min-w-full mx-3 md:min-w-1/4 mb-5 flex-col bg-white rounded-lg shadow"},r.a.createElement("div",{className:"".concat(this.props.headerColor," h-10 w-full rounded text-white flex items-center p-3")},r.a.createElement("strong",null,this.props.headerText)),r.a.createElement("div",{className:"pb-6"},this.renderKanbanItems()))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).showAddNewTask=function(){e.setState({addNewTaskIsActive:!0})},e.closeAddNewTask=function(){e.setState({addNewTaskIsActive:!1})},e.addNewTask=function(t,a){var n;n=e.state.tasks.length>0?e.state.tasks[e.state.tasks.length-1].id+1:1,e.setState({tasks:e.state.tasks.concat([{id:n,category:t,title:a}])})},e.handleKeyPress=function(t){"Enter"===t.key&&0!==t.target.value.trim().length&&(e.addNewTask("todo",t.target.value),e.closeAddNewTask())},e.onDragStart=function(e){e.dataTransfer.setData("id",e.currentTarget.id.split("-")[0])},e.onDragOver=function(e){e.stopPropagation(),e.preventDefault()},e.onDrop=function(t){t.preventDefault();var a=t.dataTransfer.getData("id"),n=t.currentTarget.id,r=e.state.tasks.filter((function(e){return Number(e.id)===Number(a)&&(e.category=n),e}));e.setState({tasks:r})},e.deleteKanbanItem=function(t){var a=e.state.tasks.filter((function(e){return Number(e.id)!==Number(t.currentTarget.id)}));e.setState({tasks:a})},e.filterTasks=function(t){return e.state.tasks.filter((function(e){return e.category===t}))},e.renderKanbanContainers=function(){return e.state.kanbanContainers.map((function(t,a){return r.a.createElement(g,{onDragStart:e.onDragStart,onDragOver:e.onDragOver,onDrop:function(t){return e.onDrop(t)},deleteKanbanItem:e.deleteKanbanItem,headerColor:t.headerColor,headerText:t.headerText,tasks:e.filterTasks(t.category),key:a})}))},e.state={tasks:[],addNewTaskIsActive:!1,kanbanContainers:[{headerColor:"bg-red-600",headerText:"Todo",category:"todo"},{headerColor:"bg-yellow-600",headerText:"Doing",category:"doing"},{headerColor:"bg-green-600",headerText:"Done",category:"done"}]},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{addNewTaskIsActive:this.state.addNewTaskIsActive,closeAddNewTask:this.closeAddNewTask,showAddNewTask:this.showAddNewTask,handleKeyPress:this.handleKeyPress}),r.a.createElement("div",{className:"container-draggable flex flex-col md:flex-row justify-center m-10"},this.renderKanbanContainers()))}}]),t}(n.Component);o.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.776027b8.chunk.js.map