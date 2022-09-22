import { Curso } from './../core/model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  list(): Curso[] {
    return [
      {id: 1, nomecurso: 'Desenvolvimento de Sistemas'},
      {id: 2, nomecurso: 'Logistica'},
      {id: 3, nomecurso: 'Quimica'},
      {id: 4, nomecurso: 'Marcenaria'}
    ];
  }
}
