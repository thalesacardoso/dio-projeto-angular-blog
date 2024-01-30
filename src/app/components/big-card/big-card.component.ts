import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-big-card',
	templateUrl: './big-card.component.html',
	styleUrls: [
		'./big-card.component.css',
		'./big-card.component.responsivo.css',
	],
})
export class BigCardComponent implements OnInit {
  
  @Input()
	id: string = '';
	@Input()
	image: string = '';
	@Input()
	title: string = '';
	@Input()
	description: string = '';

	constructor() {}

	ngOnInit(): void {}
}
