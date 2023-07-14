import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularComponentes4';

  @Input() tareasRecibidas = [];
  @Input() enviarTareas = [];

  tareas: any = [];

  recibirTarea() 
  {
    
    this.tareas.push(this.tareasRecibidas);
    console.log("Tareas recibidas realizada");
  }
  
}
