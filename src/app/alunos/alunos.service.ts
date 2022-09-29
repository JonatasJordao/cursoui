import { Aluno } from './../core/model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  list(): Aluno[] {
    return [
      {id: 1, nomealuno: 'Jonatas'},
      {id: 2, nomealuno: 'Gabriel'}

    ];
  }
}
