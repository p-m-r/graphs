import { Component, OnInit } from '@angular/core';

import { Graph } from '../../graphs/graph.model';
import { EditService } from '../../graphs/edit.service';
import { Vertex } from '../../shared/vertex.model';

@Component({
	selector: 'adjacency-matrix',
	templateUrl: './adjacency-matrix.component.html',
	styleUrls: ['./adjacency-matrix.component.css']
})
export class AdjacencyMatrixComponent {
	graph: Graph = null;
	colWidth: number = 0;

	constructor(private editService: EditService) {}

	ngOnInit() {
		if (this.editService.currentGraph) {
			this.graph = this.editService.currentGraph;
			this.setColWidth();
		}
		this.editService.graphSelected.subscribe(
				(graph: Graph) => {
					this.graph = graph;
					this.setColWidth();
				}
			);
	}
	getEdgeWeight(vertex1: Vertex, vertex2: Vertex) {
		for (let neighbor of vertex1.neighbors) {
			if (neighbor.node == vertex2) {
				return neighbor.edgeWeight;
			}
		}
		return 0;
	}
	setColWidth() {
		this.colWidth = 12 + 6*this.graph.maxAbsEdgeWeight.toString().length;
	}
}