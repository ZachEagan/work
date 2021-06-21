// add event handler to checkbox
// modify the correct objects completed property -> toggleTodo
// Save and rerender

const getSavedTodos = function (){
    const todoJSON = localStorage.getItem('todos')

    if(todoJSON !== null){
        todos = JSON.parse(todoJSON)
    }
}

const saveTodos = function (todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Remove a todo from the list
const removeTodo = function(id){
    const todoIndex = todos.findIndex(function(todo) {
        return todo.id == id
    })

    if(todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo = function(id){
    const todoIndex = todos.findIndex(function(todo) {
        return todo.id == id
    })

    if(todoIndex > -1){
        todos[todoIndex].completed = !todos[todoIndex].completed
    }
}


const generateTodoDom = function(todo){
    const todoEl = document.createElement('div')
    const textEl = document.createElement('span')
    
    const checkboxEl = document.createElement('input')
    checkboxEl.setAttribute('type', 'checkbox')
    // Check checkbox if todo completed
    checkboxEl.checked = todo.completed
    // Attach checkbox event to keep completed propery in sync
    checkboxEl.addEventListener('change', function(){
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'x'
    deleteButton.addEventListener('click', function(e){
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    todoEl.appendChild(checkboxEl)

    if(todo.text == ''){
        textEl.textContent = 'Generic unnamed todo'
    } else {
        textEl.textContent = todo.text
    }

    todoEl.appendChild(textEl)
    todoEl.appendChild(deleteButton)

    

    return todoEl
}

const generateSummaryDOM = function (todo){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length}`
    document.querySelector('#todo').appendChild(summary)
}

const renderTodos = function(todo, filters) {
    const filteredTodos = todo.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#todo').innerHTML = ''
    
    generateSummaryDOM()
    
    filteredTodos.forEach(function(todo) {
        const todoEl = generateTodoDom(todo)
        document.querySelector('#todo').appendChild(todoEl)
    })
}

// Get the DOM elements for an individual note
// generateTodoDom

// Get the DOM elements for list summary
// generateSummaryDOM