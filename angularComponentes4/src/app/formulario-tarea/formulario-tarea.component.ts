import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-tarea',
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css']
})
export class FormularioTareaComponent {

  titulo: string = '';
  descripcion: string = '';
  mostrarTareas: boolean = false;

  @Output() nuevasTareas = new EventEmitter<{titulo: string; descripcion: string}>();
  tarea = {titulo: '', descripcion: ''};

  enviarTarea(newTitulo: string, newDescripcion: string)
  {

    this.tarea.titulo = newTitulo;
    this.tarea.descripcion = newDescripcion;

    this.nuevasTareas.emit(this.tarea)
    this.tarea = {titulo:'', descripcion:''};
  }
}
