import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'experiencia2',
  templateUrl: './experiencia2.component.html',
  styleUrls: ['./experiencia2.component.css']
})
export class Experiencia2Component implements OnInit {

  cargo: string;
  local: string;
  tempo: string;
  descricao: string;

  constructor() { 

    this.cargo = "Desenvolvedor voluntário";

    this.local = "IFMG - Campus Formiga";

    this.tempo = "1 ano";

    this.descricao = "Projeto de Extensão: Desenvolvimento de Software gerenciador de ambientes para a instituição, utilizando Spring Framework no backend e Angular no frontend.";

  }

  ngOnInit(): void {
  }

}
