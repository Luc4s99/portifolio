import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  email: string = "lucasmt.99@outlook.com";
  numero: string = "5537999885593";

  constructor() { }

  ngOnInit(): void {
  }

}
