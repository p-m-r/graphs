import { Component } from '@angular/core';

import { GraphService } from './graphs/graph.service';
import { EditService } from './graphs/edit.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [GraphService, EditService]
})
export class AppComponent {

}