import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
	private jbtHeading:string;
	private jbtText:string;
	private jbtBtnText:string;
	private jbtBtnUrl:string;

	constructor() {
		this.jbtHeading = "Yo";
		this.jbtText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur atque unde laborum amet omnis vitae id tenetur nulla? Dolorum maiores odio magnam optio reiciendis velit minima, fugit illo dolorem similique!"
		this.jbtBtnText = "Read More";
		this.jbtBtnUrl = "/about";
	}
}
