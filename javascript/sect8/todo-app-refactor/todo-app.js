let todos= []


const filters = {
    searchText: ''
}

getSavedTodos()


const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

renderTodos(todos, filters)


document.querySelector('#todo-selector').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
    console.log(e.target.value)
})

document.querySelector('#todo-adder').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.todoName.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    console.log(e.target.elements.todoName.value)
    e.target.elements.todoName.value = ''
})

// Fetch existing todos from localStorage
// getSavedTodos

// Save todos to localStorage
// saveTodos

// Render application todos based on filters
// render Todos

// Get the DOM elements for an individual note
// generateTodoDom

// Get the DOM elements for list summary
// generateSummaryDOM