import { Component, Output, EventEmitter } from '@angular/core';

import { GraphService } from '../../graph.service';
import { Graph } from '../../graph.model';
import { Vertex } from '../../../shared/vertex.model';
import { Neighbor } from '../../../shared/neighbor.model';
import { Edge } from '../../../shared/edge.model';

@Component({
	selector: 'create-graph',
	templateUrl: './create-graph.component.html',
	styleUrls: ['./create-graph.component.css']
})
export class CreateGraphComponent {
	mode: string = 'probability';
	name: string = '';
	vertices: number = 0;
	probability: number = 0;
	edges: number = 0;
	weighted: boolean = false;
	minWeight: number = 1;
	maxWeight: number = 1;
	directed: boolean = false;
	stronglyConnected: boolean = false;
	trialsNumber: number = 1;
	message: boolean = false;
	@Output() graphCreated = new EventEmitter<any>();
	
	constructor(private graphService: GraphService) {
	}

	calculateEdges() {
		let n = this.directed ? 2 : 1;
		let maxEdges = n*this.vertices*(this.vertices - 1)/2;
		this.edges = Math.round(this.probability/100*maxEdges);
	}
	onSubmit() {
		if (!this.stronglyConnected) {
			if (this.mode == 'probability') {
				this.graphService.addGraph(this.createGraphFromProbability(this.vertices, this.probability, this.name));
			} else {
				this.graphService.addGraph(this.createGraphFromEdges(this.vertices, this.edges, this.name));
			}
			this.graphCreated.emit();
			this.message = false;
			let tmp = this.graphService.graphs[this.graphService.graphs.length - 1];
			try {
				//console.log('Bellman-Ford: ', this.graphService.shortestPathsFromVertexBellmanFord(tmp, tmp.vertices[0]));
				//console.log(this.graphService.shortestPathsForAllJohnson(tmp));
				//console.log(tmp, this.graphService.copyDirectedGraph(tmp));
			} catch (e) {
				console.log(e);
			}
			return;
		} else {
			let graph: Graph = undefined;
			let stronglyConnected: boolean = false;
			let trial = 0;
			while ((trial < this.trialsNumber) && (!stronglyConnected)) {
				graph = this.createGraphFromProbability(this.vertices, this.probability, this.name);
				stronglyConnected = this.graphService.stronglyConnectedComponents(graph).length == 1 ? true : false;
				++trial;
			}
			if (stronglyConnected) {
				graph.stronglyConnected = true;
				this.graphService.addGraph(graph);
				this.graphCreated.emit();
				this.message = false;
				return;
			}
		}
		this.message = true;	
	}
	//method creates the required number of vertices and goes over each pair deciding 
	//whether the vertices will be connected based on the probability
	createGraphFromProbability(verticesNumber: number, probability: number, name: string): Graph {
		//initializing the vertex list
		let vertices: Vertex[] = [];
		for (let i = 0; i < this.vertices; ++i) {
			vertices.push(new Vertex((i + 1).toString()));
		}
		//generating the graph
		if (!this.directed) {
			if (!this.weighted) {
				for (let i = 0; i < vertices.length; ++i) {
					for (let j = i + 1; j < vertices.length; ++j) {
						if (this.randInt(0, 100) < probability) {
							vertices[i].neighbors.push(new Neighbor(vertices[j], 1));
							vertices[j].neighbors.push(new Neighbor(vertices[i], 1));	
						}
					}
				}
			} else {
				for (let i = 0; i < vertices.length; ++i) {
					for (let j = i + 1; j < vertices.length; ++j) {
						if (this.randInt(0, 100) < probability) {
							vertices[i].neighbors.push(new Neighbor(vertices[j], this.randInt(this.minWeight, this.maxWeight)));
							vertices[j].neighbors.push(new Neighbor(vertices[i], this.randInt(this.minWeight, this.maxWeight)));	
						}
					}
				}
			}
		} else {
			if (!this.weighted) {
				for (let i = 0; i < vertices.length; ++i) {
					for (let j = 0; j < vertices.length; ++j) {
						if (this.randInt(0, 100) < probability && i != j) {
							vertices[i].neighbors.push(new Neighbor(vertices[j], 1));
							vertices[j].incomingNeighbors.push(new Neighbor(vertices[i], 1));
						}
					}
				}
			} else {
				for (let i = 0; i < vertices.length; ++i) {
					for (let j = 0; j < vertices.length; ++j) {
						if (this.randInt(0, 100) < probability && i != j) {
							let tmp = this.randInt(this.minWeight, this.maxWeight);
							vertices[i].neighbors.push(new Neighbor(vertices[j], tmp));
							vertices[j].incomingNeighbors.push(new Neighbor(vertices[i], tmp));
						}
					}
				}
			}
		}
		//sorting neighbors of the vertices by their name
		for (let vertex of vertices) {
			vertex.neighbors.sort(
					(a, b) => {
						if (parseInt(a.node.name, 10) > parseInt(b.node.name, 10))
							return 1;
						else if (parseInt(a.node.name, 10) < parseInt(b.node.name, 10))
							return -1;
						else
							return 0;
					}
				)
		}
		//creating the graph and setting its properties
		let graph = new Graph(vertices, name)
		if (this.weighted) {
			graph.weighted = true;
			graph.maxAbsEdgeWeight = Math.max(Math.abs(this.minWeight), Math.abs(this.maxWeight));
		}
		if (this.directed)
			graph.directed = true;
		return (graph);
	}
	//method creates an array of all possible edges and randomly chooses
	//the required number of them to be in the graph
	createGraphFromEdges(verticesNumber: number, edgesNumber: number, name: string): Graph {
		//initializing the list of vertices
		let vertices: Vertex[] = [];
		for (let i = 0; i < this.vertices; ++i) {
			vertices.push(new Vertex((i + 1).toString()));
		}
		//preparing the list of edges
		let edges: Edge[] = [];
		if (!this.directed) {
			if (!this.weighted) {
				for (let i = 0; i < vertices.length; ++i) {
					for (let j = i + 1; j < vertices.length; ++j) {
						edges.push(new Edge(vertices[i], vertices[j], 1));
					}
				}
			} else {
				for (let i = 0; i < vertices.length; ++i) {
					for (let j = i + 1; j < vertices.length; ++j) {
						edges.push(new Edge(vertices[i], vertices[j], this.randInt(this.minWeight, this.maxWeight)));
					}
				}
			}
		} else {
			if (!this.weighted) {
				for (let i = 0; i < vertices.length; ++i) {
					for (let j = 0; j < vertices.length; ++j) {
						if (i != j)
							edges.push(new Edge(vertices[i], vertices[j], 1));
					}
				}
			} else {
				for (let i = 0; i < vertices.length; ++i) {
					for (let j = 0; j < vertices.length; ++j) {
						if (i != j)
							edges.push(new Edge(vertices[i], vertices[j], this.randInt(this.minWeight, this.maxWeight)));
					}
				}
			}
		}
		//generating the graph
		if (!this.directed) {
			for (let i = 0; i < edgesNumber; ++i) {
				let edge = edges.splice(this.randInt(0, edges.length - 1), 1)[0];
				edge.node1.neighbors.push(new Neighbor(edge.node2, edge.weight));
				edge.node2.neighbors.push(new Neighbor(edge.node1, edge.weight));
			}
		} else {
			for (let i = 0; i < edgesNumber; ++i) {
				let edge = edges.splice(this.randInt(0, edges.length - 1), 1)[0];
				edge.node1.neighbors.push(new Neighbor(edge.node2, edge.weight));
				edge.node2.incomingNeighbors.push(new Neighbor(edge.node1, edge.weight));
			}
		}
		//sorting neighbors of the vertices by their name
		for (let vertex of vertices) {
			vertex.neighbors.sort(
					(a, b) => {
						if (parseInt(a.node.name, 10) > parseInt(b.node.name, 10))
							return 1;
						else if (parseInt(a.node.name, 10) < parseInt(b.node.name, 10))
							return -1;
						else
							return 0;
					}
				)
		}
		//creating the graph and setting its properties
		let graph = new Graph(vertices, name)
		if (this.weighted) {
			graph.weighted = true;
			graph.maxAbsEdgeWeight = Math.max(Math.abs(this.minWeight), Math.abs(this.maxWeight));
		}
		if (this.directed)
			graph.directed = true;
		return (graph);
	}
	setStronglyConnected() {
		if (!this.directed)
			this.stronglyConnected = false;
	}
	setMode() {
		if (this.stronglyConnected) {
			this.mode = 'probability';
		}
	}
	//returns a random integer between min and max (both inclusive)
	randInt(min: number, max: number) {
		return Math.floor(Math.random()*(max - min + 1)) + min;
	}
}