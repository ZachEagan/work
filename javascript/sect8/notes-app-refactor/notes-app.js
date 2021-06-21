const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e){
    const note = {
        id: uuidv4(),
        title: '',
        body: ''
    }
    notes.push(note)
    saveNotes(notes)
    const linkURL = '/edit.html#' + note.id
    location.assign(linkURL)
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})
