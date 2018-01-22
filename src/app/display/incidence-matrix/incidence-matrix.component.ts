import { Component, OnInit } from '@angular/core';

import { Graph } from '../../graphs/graph.model';
import { EditService } from '../../graphs/edit.service';
import { Vertex } from '../../shared/vertex.model';
import { Edge } from '../../shared/edge.model';

@Component({
	selector: 'incidence-matrix',
	templateUrl: './incidence-matrix.component.html',
	styleUrls: ['./incidence-matrix.component.css']
})
export class IncidenceMatrixComponent {
	graph: Graph = null;
	edges: Edge[] = [];
	colWidth: number = 0;

	constructor(private editService: EditService) {}

	ngOnInit() {
		if (this.editService.currentGraph) {
			this.graph = this.editService.currentGraph;
			this.getEdges();
		}
		this.editService.graphSelected.subscribe(
				(graph: Graph) => {
					this.graph = graph;
					this.getEdges();
				}
			)
	}
	getEdgeWeight(vertex: Vertex, edge: Edge) {
		if (edge.node1 == vertex) {
			return edge.weight;
		} else if (edge.node2 == vertex) {
			if (!this.graph.directed) {
				return edge.weight;
			} else {
				return '(' + edge.weight + ')';
			}
		} else {
			return 0;
		}
	}
	getEdges() {
		let edges: Edge[] = [];
		if (!this.graph.directed) {
			for (let i = 0; i < this.graph.numberOfVertices; ++i) {
				for (let j = 0; j < this.graph.vertices[i].neighbors.length; ++j) {
					//we are making sure that we don't add any edge two times
					if (this.graph.vertices[i].name < this.graph.vertices[i].neighbors[j].node.name) {
						edges.push(new Edge(
							this.graph.vertices[i], 
							this.graph.vertices[i].neighbors[j].node, 
							this.graph.vertices[i].neighbors[j].edgeWeight));
					}
				}
			}
		} else {
			for (let i = 0; i < this.graph.numberOfVertices; ++i) {
				for (let j = 0; j < this.graph.vertices[i].neighbors.length; ++j) {
					edges.push(new Edge(
						this.graph.vertices[i], 
						this.graph.vertices[i].neighbors[j].node, 
						this.graph.vertices[i].neighbors[j].edgeWeight));	
				}
			}
		}
		this.colWidth = 12 + 6*this.graph.maxAbsEdgeWeight.toString().length;
		this.edges = edges;
	}
}