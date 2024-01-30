import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-small-card',
	templateUrl: './small-card.component.html',
	styleUrls: [
		'./small-card.component.css',
		'./small-card.component.responsivo.css',
	],
})
export class SmallCardComponent implements OnInit {
	@Input()
	id: string = '';
	@Input()
	image: string = '';
	@Input()
	description: string = '';

	constructor() {}

	ngOnInit(): void {}
}
