import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  private note: Note;
  // notes: Array<Note> = [];

  //let parent component know new note was created
  @Output() private noteEmit = new EventEmitter();


  constructor(private _noteService: NoteService) { }

  onSubmit(){
    console.log(this.note);
    this.noteEmit.emit(this.note);
    this.note = new Note();
  }

  ngOnInit() {
    this.note = new Note();
  }

}
