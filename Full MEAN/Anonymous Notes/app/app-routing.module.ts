import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerComponent } from'./container/container.component'
import { NoteComponent } from './note/note.component';
import { NewNoteComponent } from './new-note/new-note.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component: ContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
