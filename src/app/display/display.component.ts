import { Component } from '@angular/core';

import { EditService } from '../graphs/edit.service';

@Component({
	selector: 'display',
	templateUrl: 'display.component.html',
	styles: [
		'.flex { display: flex; justify-content: space-around; }',
		'.flex > * { width: 180px; white-space: normal; }',
		'.graph-info { margin: 20px 0 0 20px; }'
	]
})
export class DisplayComponent {
	displayMode = 'adjacency-list';

	constructor(public editService: EditService) {}

	setDisplayMode(mode: string) {
		this.displayMode = mode;
	}
}