import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {

  @Input() mostrar_tareas: any;

  constructor()
  {
    
    this.mostrar_tareas = [];
  }
  
  finalizarTarea()
  {
    
    
  }
}
