const argv = require('yargs');
const notes=require('./note.js')
//// here we are making a command name as required and after that we we undergo several changes
argv.command({
    command: 'add',
    describe: 'Add Something',
    builder: {             // the required objects input from the user
        title: {
        describe: 'Note title',   
        demandOption: true,         // demandOption :true means that it is neccessry
        type: 'string'             // should be of ytpw string
    },
    body: {
        describe: 'Note title',   
        demandOption: true,         // demandOption :true means that it is neccessry
        type: 'string'             // should be of ytpw string
    }
},
    handler: function(argv){                 // to manange the output
    //console.log('TITLE:-'+argv.title+'--ADDED');
    notes.addnote(argv.title,argv.body)        // now here this command is responsible for calling the addnote fnction in the note.js and pass the title and body to iit
}
}).parse();
argv.command({
    command: 'remove',
    describe: 'Remove Something',
    builder: {             // the required objects input from the user
        title: {
        describe: 'Note title',   
        demandOption: true,         // demandOption :true means that it is neccessry
        type: 'string'            // should be of ytpw string
        }
    },
    handler: function(argv){                 // to manange the output
        notes.remnote(argv.title)
    } 
}).parse();               // parsing is important to stringyfy the data and store it in a JSON format
argv.command({
    command: 'list',
    describe: 'LIST all NOTES',
    handler: function(){                 // to manange the output
        notes.listnote()
    } 
}).parse();
argv.command({  // this is the read command and it is responsible for the reading of a note
    command: 'read',
    describe: 'Reading a NOTE',
    builder: {             // the required objects input from the user
        title: {
        describe: 'Note title',   
        demandOption: true,         // demandOption :true means that it is neccessry
        type: 'string'            // should be of ytpw string
        }
    },
    handler: function(argv){                 // to manange the output
        notes.readnote(argv.title)
    } 
}).parse();