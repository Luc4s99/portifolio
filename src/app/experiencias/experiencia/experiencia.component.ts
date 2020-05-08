import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  cargo: string;
  local: string;
  tempo: string;
  descricao: string;

  constructor() { 
    
    this.cargo = "Analista de TI";

    this.local = "Casa de Saúde Santa Marta de Formiga";

    this.tempo = "5 meses";

    this.descricao = "Manutenção de computadores. Gerenciamento da área de TI. Gerenciamento, manutenção e atualização do sistema SGH-SPDATA(Sistema de Gestão Hospitalar).";
  }

  ngOnInit(): void {
  }

}
