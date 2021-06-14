const getSavedTodos = function (){
    const todoJSON = localStorage.getItem('todos')

    if(todoJSON !== null){
        todos = JSON.parse(todoJSON)
    }
}

const saveTodos = function (todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}


// 1. Setup a root div
// 2. Setup and append a checkbox
//someNode.setAttribute('type', 'checkbox')
// 3. Setup and append a span (set text)
// 4. Setup and append a button (set text)
const generateTodoDom = function(todo){
    const todoEl = document.createElement('div')
    const textEl = document.createElement('span')
    
    const checkboxEl = document.createElement('input')
    checkboxEl.setAttribute('type', 'checkbox')

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'x'

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