const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function(note){
    return note.id === noteId
})
if(note === undefined){
    location.assign('/index.html')
}

document.querySelector('#note-title').value = note.title
document.querySelector('#note-body').value = note.body

// note-title listener to update note
document.querySelector('#note-title').addEventListener('input', function(e){
    console.log(e.target.value)
    note.title = e.target.value
    saveNotes(notes)
})

// note-body listener to update note
document.querySelector('#note-body').addEventListener('input', function(e){
    console.log(e.target.value)
    note.body = e.target.value
    saveNotes(notes)
})

//remove note button
document.querySelector('#remove-note').addEventListener('click', function(e){
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

//Setup input event for title
//Update note object and save notes list
//Repeat 1-2 for body
// Setup a remove button that removes notes
// and sends user back to home page