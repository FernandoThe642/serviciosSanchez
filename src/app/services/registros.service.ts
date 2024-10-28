import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  tareas: any[] = [];

  constructor() { 
    this.cargarTareas();
  }

  private cargarTareas() {
    this.tareas = JSON.parse(localStorage.getItem('tareas') || '[]');
  }

  // Método para agregar una tarea al LocalStorage.
  guardarTarea(tarea: any) {
    tarea.id = this.generarId();
    this.tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  private generarId(): number {
    return this.tareas.length > 0 ? Math.max(...this.tareas.map(t => t.id)) + 1 : 1;
  }

  // Método para obtener todas las tareas del LocalStorage
  obtenerTareas(): any[] {
    return this.tareas;
  }

  // Método para eliminar operaciones del LocalStorage.
  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }



}
