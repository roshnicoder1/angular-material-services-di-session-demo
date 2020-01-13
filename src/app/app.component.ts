import { Component, OnInit } from '@angular/core';
import { Note } from 'src/Note';
import { NoteService } from 'src/note.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  note: Note = new Note();
  notes: Note[];
  errorMessage: string;
  constructor(private noteService: NoteService){
    console.log("App construcotr is called");
  }
  
  ngOnInit(){
   
    this.noteService.getNotes().subscribe((receivedNotes)=>{
      this.notes = receivedNotes;
    },(error)=>{
      this.errorMessage = error.message;
    })

  }

  takeNote(){

    // console.log("take note called");
    this.noteService.addNote(this.note).subscribe((addedNote)=>{
      this.notes.push(addedNote); 
    })
  }

}
