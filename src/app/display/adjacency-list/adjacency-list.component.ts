import { Component, OnInit } from '@angular/core';

import { Graph } from '../../graphs/graph.model';
import { EditService } from '../../graphs/edit.service';

@Component({
	selector: 'adjacency-list',
	templateUrl: './adjacency-list.component.html',
	styleUrls: ['./adjacency-list.component.css']
})
export class AdjacencyListComponent {
	graph: Graph = null;

	constructor(private editService: EditService) {}

	ngOnInit() {
		this.graph = this.editService.currentGraph;
		this.editService.graphSelected.subscribe(
				(graph: Graph) => this.graph = graph
			)
	}
}