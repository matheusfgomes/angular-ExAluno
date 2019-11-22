import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { ALUNOS } from '../mock-alunos';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})

export class AlunoComponent implements OnInit {

  aluno = ALUNOS;
  selectedAluno: Aluno;

  constructor() { }

  ngOnInit() {
  }

  onSelect(aluno: Aluno): void {
    this.selectedAluno = aluno;
  }
}
