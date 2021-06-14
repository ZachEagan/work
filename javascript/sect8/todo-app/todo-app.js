// 1. Delete Dummy Data
// 2. Read and parse the data when the app starts up
// 3. Stringify and write the data when new data is added

let todos= []


const filters = {
    searchText: ''
}

const todoJSON = localStorage.getItem('todos')

if(todoJSON !== null){
    todos = JSON.parse(todoJSON)
}


const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})


const renderTodos = function(todo, filters) {
    const filteredTodos = todo.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#todo').innerHTML = ''
    
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length}`
    document.querySelector('#todo').appendChild(summary)
    
    filteredTodos.forEach(function(todo) {
        const todoEl = document.createElement('p')
        if(todo.text == ''){
            todoEl.textContent = 'Generic unnamed todo'
        } else {
            todoEl.textContent = todo.text
        }
        document.querySelector('#todo').appendChild(todoEl)
    })
}

renderTodos(todos, filters)


document.querySelector('#todo-selector').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
    console.log(e.target.value)
})

// 1. Create a form with a single input for todo text
// 2. Setup a submit handler and cancel the default aciton
// 3. Add a new item to the todos array with that text data (completed value of false)
// 4. Rerend the application
// 5. Clear the input field value

document.querySelector('#todo-adder').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: '',
        completed: false
    })
    localStorage.setItem('todos', todos)
    renderTodos(todos, filters)
    console.log(e.target.elements.todoName.value)
    e.target.elements.todoName.value = ''
})