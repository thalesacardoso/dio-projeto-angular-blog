import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: [
    './content.component.css',
    './content.component.responsivo.css'
]
})
export class ContentComponent implements OnInit {
  image: string = 'https://wallpapers-clan.com/wp-content/uploads/2023/11/red-ferrari-supercar-desktop-wallpaper-preview.jpg';
  title: string = 'Aqui vai vim um titulo';
  description: string = 'Aqui vai vim um texto grande Aqui vai vim um texto grande Aqui vai vim um texto grande Aqui vai vim um texto grande Aqui vai vim um texto grande ';

  constructor() { }

  ngOnInit(): void {
  }

}
