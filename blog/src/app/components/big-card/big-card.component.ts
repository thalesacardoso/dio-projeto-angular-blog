import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: [
    './big-card.component.css',
    './big-card.component.responsivo.css'
]
})
export class BigCardComponent implements OnInit {
  imagem: string = ""
  title: string = ""
  
  constructor() { }

  ngOnInit(): void {
  }

}
