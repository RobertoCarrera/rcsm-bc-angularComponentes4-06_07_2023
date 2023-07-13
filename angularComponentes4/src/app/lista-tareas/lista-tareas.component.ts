import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {

  @Input() info_tareas: any;

  constructor()
  {

    this.info_tareas = [];
  }

  tareaAcabada(){

    
  }
}
