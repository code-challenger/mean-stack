import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import{ Note } from './note';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class NoteService {

  constructor(private _http: Http) { }

  create(note:Note){
    return this._http.post('/new', note)
      .map( data => data.json())
      .toPromise();
  }

  all(){
    return this._http.get('/notes')
      .map( data => data.json())
      .toPromise();
  }

  get(id){
        return this._http.get('/notes/${id}')
        .map(data=>data.json())
        .toPromise()
    }

    update(note:Note,id){
        return this._http.put('/notes/${id}',note)
        .map(data=>data.json())
        .toPromise()
    }

    delete(id){
        return this._http.put('/notes/${id}',id)
        .map(data=>data.json())
        .toPromise()
    }

}
