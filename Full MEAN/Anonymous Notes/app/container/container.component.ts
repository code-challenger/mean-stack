import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  private title: string = 'Anonymous Notes';

  private notes: Array<Note> = [];

  @Input() private note: Note;

  constructor(private _noteService: NoteService) { }

  //all notes
  public all(){
    this._noteService.all()
      .then(notes => this.notes = notes)
      .catch(err => console.log(err));
      this.all();
    }

  // new note
  public create(note:Note){
    this._noteService.create(note)
      .then( (createdNote) => {this.notes.push(createdNote);
      console.log(createdNote)})
      .catch(err => console.log(err));
      this.all();
  }


  createdNote(note:Note){
    this.create(note);
  }

  ngOnInit() {
    this.all();  
  }

}
