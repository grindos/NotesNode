const yargs = require('yargs');

const notes = require('./notes.js');

let argv = yargs.argv;
let command = yargs.argv._[0];
// console.log('Yargs:', argv);

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note was added');
        console.log('--');
        console.log(`Title: ${note.title}\nBody: ${note.body}`);
    } else {
        console.log('Something went wrong');
    }
} else if (command === 'list') {
    let allNotes = notes.getAll();

    console.log(`Printing ${allNotes.length} note(s).`);
    if (allNotes.length !== 0) {
        allNotes.forEach((note) => {
            notes.logNote(note);
        });
    } else {
        console.log('No notes yet');
    }
} else if (command === 'read') {
    let noteFound = notes.getNote(argv.title);
    if (noteFound) {
        notes.logNote(noteFound);
    } else {
        console.log('There is no note with such title');
    }
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    if (noteRemoved) {
        notes.logNote(noteRemoved);
    } else {
        console.log('There is no note with such title');
    }
} else {
    console.log('Command not recognized');
}