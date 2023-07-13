import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularComponentes4';

  tareas: any = [];

  agregarTarea(tarea: { titulo: string; descripcion: string }) {
    this.tareas.push(tarea);
  }
  
}
