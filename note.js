const fs=require('fs')
const chalk=require('chalk')
const getnote = function(){
    return "your note"
}
const addnote = function(title,body){
    const notes=loadnote()
    const duplinote=notes.filter((note)=>note.title===title)
    /*const duplinote=notes.filter(function(note){   // this is the duplicate function array called
        return note.title===title                    // and it will filter all the note and if any matching found it will add to it
    })*/
    const duplicate=notes.find((note)=>note.title===title)
    if(!duplicate)
    {                // now  if the length of that duplicate note array is zero then and then only we will add it
        notes.push({
            title: title,    // this is the function for adding a note to the note.josn (array) and convert it to the object
            body: body
        })
       savenote(notes)
    }
    else{
    console.log(chalk.red.inverse("NOTE TITLE TAKEN!! PLEASE CHANGE THE TITLE"))  // else we wiil print a console log message that it should be change
    }
}
const savenote=function(notes){
    const datajson=JSON.stringify(notes)
    fs.writeFileSync('note.json',datajson)  // this is the function used to save the note after nay work
}
const loadnote= function(){ // this is the function used to  load notes in any case (remove ,add ,display)
    try{
        const databuf=fs.readFileSync('note.json')   // if there is notes already then just add it notes.json
        const datajson=databuf.toString()    // this is the process of adding data to to json file
        return JSON.parse(datajson)    // there is the json buffer and it needs to be convert into string and then parse it to notes.json
    }
    catch(e)
    {
        return []           /// now here we are actually just exception handling and catching the error if it is there
    }         // and returning a new array to it because if there was no previous notes so we need to start it from a array
}
const remnote=function(title){
    const notes=loadnote()
    const notekeep=notes.filter(function(note){
        return note.title!=title
    })   // this is the removenote function and it will filter the note and check for the title provided
    // and will make a new object/ array that will keep the note and will finaly save that object into our JSON file
    if(notes.length>notekeep.length){
        console.log(chalk.green.inverse('NOTE REMOVED'))
        savenote(notekeep)
    }
    else{
        console.log(chalk.red.inverse('!! NO NOTE FOUND'))
    }
}
const listnote=() => {
    const notes=loadnote()
    console.log(chalk.green.inverse('YOUR NOTES')) 
    notes.forEach((note)=>{      // this is the list note function and it will list all you notes title
        console.log(note.title)
    })
}
const readnote=(title)=>{
    const notes=loadnote()
    const note= notes.find((note)=> note.title===title)
    if(note)
{   // this is the read note function and it will read the note while taking input from the user about the title 
        console.log(chalk.green.inverse(note.title)) // and after that print the required body output of that note
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('!!! NO NOTE FOUND'))
    }
}
module.exports={
    getnote:getnote,
    addnote:addnote,
    remnote:remnote,  // module exports is responsible for the function that we are giving to app.js
    listnote:listnote,
    readnote:readnote
}  