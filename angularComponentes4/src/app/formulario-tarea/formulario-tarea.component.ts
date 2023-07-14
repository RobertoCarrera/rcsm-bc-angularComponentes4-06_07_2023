import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-tarea',
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css']
})
export class FormularioTareaComponent {

  titulo: string = '';
  descripcion: string = '';
  mostrarTareas: boolean = false;

  enviarTareas: any = [];

  nuevaTarea()
  {

    this.enviarTareas.push({

      titulo: this.titulo,
      descripcion: this.descripcion
    });
    console.log("Nueva Tarea realizada");
  }

  enviarTarea()
  {

    return this.enviarTareas;
    console.log("Enviar Tarea realizada");
  }
}
