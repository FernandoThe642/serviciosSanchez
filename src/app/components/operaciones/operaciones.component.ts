import { Component } from '@angular/core';
import { RegistrosService } from '../../services/registros.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operaciones',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.scss'
})
export class OperacionesComponent {

  
  nombreTarea: string = '';
  descripcionTarea: string = '';
  tareas: any[] = [];
  idTareaSeleccionada: number | null = null;
  displayCal: string = ''
  operation: string = ''
  var: number =0

  constructor(private RegistrosService: RegistrosService) {}

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas() {
    this.tareas = this.RegistrosService.obtenerTareas();
  }

  agregarTarea() {
    if (this.validarFormulario()) {
      const tarea = {
        id: this.generarId(),
        nombreTarea: this.nombreTarea,
        descripcionTarea: this.descripcionTarea,
      };
      this.RegistrosService.guardarTarea(tarea);
      this.cargarTareas();
      this.limpiarFormulario();
    }
  }

  eliminarTarea(id: number) {
    this.RegistrosService.eliminarTarea(id);
    this.cargarTareas();
  }


  validarFormulario(): boolean {
    return this.nombreTarea !== '' && this.descripcionTarea !== '';
  }

  limpiarFormulario() {
    this.nombreTarea = '';
    this.descripcionTarea = '';
  }

  private generarId(): number {
    return this.tareas.length > 0 ? Math.max(...this.tareas.map(t => t.id)) + 1 : 1;
  }


  add(value: string ){
  
    if(value=="="){
      try {
        this.operation= this.displayCal  
        this.displayCal= eval(this.displayCal)
        // this.calculadoraService.add(this.operation + '=' + this.displayCal)
      } catch (error) {
          this.displayCal = 'Error'
      }
      this.var=1
    }else if(value=="C") {
      this.displayCal= ''
    }else if(this.var==1) {
      this.var=0
      this.displayCal= ''
      this.displayCal += value
    }else {
      this.displayCal += value;
    }
  }
}
