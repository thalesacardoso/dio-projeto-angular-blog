import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css', './content.component.responsivo.css'],
})
export class ContentComponent implements OnInit {
	image: string = '';
	title: string = '';
	description: string = '';
	private id: string | null = '';

	constructor (
    private route: ActivatedRoute
  ) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
		this.setValues(this.id);
	}

	setValues(id: any) {
		const result = dataFake[id];

		this.image = result.image;
		this.title = result.title;
		this.description = result.description;
	}
}
