import { Component, Input } from '@angular/core';

import { Graph } from '../../graph.model';

@Component({
	selector: 'graph-item',
	template: 
	`<a class="list-group-item" [ngClass]="{ 'active': selected }">
		{{graph.name}} 
		<span class="graph-info">
			{{graph}}
		</span>
	 </a>`,
	styles: [
		'.graph-info { color: rgb(180, 180, 180); white-space: nowrap; }'
	]
})
export class GraphItemComponent {
	@Input() graph: Graph;
	@Input() selected: boolean = false;
}