import { Injectable } from '@angular/core';

import { Vertex } from '../shared/vertex.model';
import { Graph } from './graph.model';
import { MOCK_GRAPHS } from './mock-graphs';
import { Edge } from '../shared/edge.model';
import { Neighbor } from '../shared/neighbor.model';

@Injectable()
export class GraphService {
	graphs: Graph[] = [];
	currentId: number = 0;

	constructor() {
		/*for (let graph of MOCK_GRAPHS) {
			graph.id = this.currentId;
			++this.currentId;
			this.graphs.push(graph);
		}*/
	}
	getGraphs(): Graph[] {
		return this.graphs;
	}
	addGraph(graph: Graph) {
		graph.id = this.currentId;
		++this.currentId;
		this.graphs.push(graph);
	}
	updateGraph() {

	}
	//finds the strongly connected components of a directed graph
	//using Kosaraju's algorithm
	stronglyConnectedComponents(graph: Graph) {
		//an ordered list of vertices
		let L = [];
		//object storing information about whether the given vertex
		//has been visited or not
		let vertexInfo = {};
		for (let vertex of graph.vertices) {
			vertexInfo[vertex.name] = false;
		}
		for (let vertex of graph.vertices) {
			this.scc_visit(vertex, vertexInfo, L);
		}
		//now vertexInfo stores information about whether the given vertex
		//has been assigned to a component
		for (let vertex of graph.vertices) {
			vertexInfo[vertex.name] = false;
		}
		//object storing the strongly connected components of the graph
		//each component will be a separate property whose name is the root
		//of the component, and the value an array of vertices belonging to it
		let components = {};
		for (let vertex of L) {
			this.scc_assign(vertex, vertex, vertexInfo, components);
		}
		//converting the output into a more convenient form
		let output = [];
		for (let component in components) {
			output.push(components[component]);
		}
		if (output.length > 1) {
			output.sort(
				(a, b) => {
					if (a.length > b.length)
							return 1;
						else if (a.length < b.length)
							return -1;
						else
							return 0;
				}
			);
		}
		return output;
	}
	scc_visit(node, vertexInfo, L) {
		if (!vertexInfo[node.name]) {
			vertexInfo[node.name] = true;
			for (let neighbor of node.neighbors) {
				this.scc_visit(neighbor.node, vertexInfo, L);
			}
			L.unshift(node);
		}
	}
	scc_assign(node, root, vertexInfo, components) {
		if (!vertexInfo[node.name]) {
			vertexInfo[node.name] = true;
			if (!components[root.name])
				components[root.name] = [];
			components[root.name].push(node);
			for (let inNeighbor of node.incomingNeighbors) {
				this.scc_assign(inNeighbor.node, root, vertexInfo, components);
			}
		}
	}
	//finds shortest paths from the source vertex to all the other
	//vertices on a directed graph using Bellman-Ford algorithm.
	//negative edge weights are permitted, throws an error
	//when a negative cycle is detected
	shortestPathsFromVertexBellmanFord(graph: Graph, source: Vertex) {
		if (!graph.directed)
			throw 'Not a directed graph';
		let distance = {};
		let predecessor = {};
		let edges: Edge[] = this.getEdges(graph);
		for (let vertex of graph.vertices) {
			distance[vertex.name] = Infinity;
			predecessor[vertex.name] = null;
		}
		distance[source.name] = 0;
		for (let i = 1; i < graph.numberOfVertices; ++i) {
			for (let edge of edges) {
				if (distance[edge.node1.name] + edge.weight < distance[edge.node2.name]) {
					distance[edge.node2.name] = distance[edge.node1.name] + edge.weight;
					predecessor[edge.node2.name] = edge.node1;
				}
			}
		}
		//checking for negative cycles
		for (let edge of edges) {
			if (distance[edge.node1.name] + edge.weight < distance[edge.node2.name]) {
				throw 'Negative cycle detected.';
			}
		}
		let tmp = source;
		return [source.name, distance, predecessor];
	}
	//finds shortest paths from the source vertex to all the other
	//vertices using Dijkstra's algorithm
	//(no negative weights permitted)
	shortestPathsFromVertexDijkstra(graph: Graph, source: Vertex) {
		let unvisited = [];
		let getMinDist = (unvisited, distance) => {
			let min = unvisited[0];
			for (let el of unvisited) {
				if (distance[el.name] < distance[min.name]) {
					min = el;
				}
			}
			return min;
		}
		let distance = {};
		let predecessor = {};
		for (let vertex of graph.vertices) {
			distance[vertex.name] = Infinity;
			predecessor[vertex.name] = null;
			unvisited.push(vertex);
		}
		distance[source.name] = 0;
		while (unvisited.length > 0) {
			let vertex = getMinDist(unvisited, distance);
			unvisited.splice(unvisited.indexOf(vertex), 1);
			for (let neighbor of vertex.neighbors) {
				if (distance[vertex.name] + neighbor.edgeWeight < distance[neighbor.node.name]) {
					distance[neighbor.node.name] = distance[vertex.name] + neighbor.edgeWeight;
					predecessor[neighbor.node.name] = vertex;
				}
			}
		}
		return [source.name, distance, predecessor];
	}
	//looks for shortest paths for all pairs of vertices in a weighted directed graph
	//using Johnson's technique (uses Bellman-Ford as well as Dijkstra's algorithms)
	//edges can have negative weights, but no negative cycles are permitted
	//TODO: proper error handling
	shortestPathsForAllJohnson(graph: Graph) {
		let g: Graph = this.copyDirectedGraph(graph);
		let q: Vertex = new Vertex('x');
		for (let vertex of g.vertices) {
			q.neighbors.push(new Neighbor(vertex, 0));
		}
		g.vertices = g.vertices.concat([q]);
		let distances;
		try {
			distances = this.shortestPathsFromVertexBellmanFord(g, q)[1]; 
		} catch (e) {
			throw e;
		}
		//g.vertices = g.vertices.slice(0, g.vertices.length - 1);
		let g1 = this.copyDirectedGraph(g);
		g1.vertices = g1.vertices.slice(0, g1.vertices.length - 1);
		for (let vertex of g1.vertices) {
			for (let neighbor of vertex.neighbors) {
				neighbor.edgeWeight += 
					distances[vertex.name] -
					distances[neighbor.node.name];
			}
		}
		let output = {};
		for (let vertex of g1.vertices) {
			output[vertex.name] = this.shortestPathsFromVertexDijkstra(g1, vertex);
		}
		return output;
	}

	//returns an array containing all the edges in a graph
	getEdges(graph: Graph): Edge[] {
		let edges: Edge[] = [];
		if (!graph.directed) {
			for (let i = 0; i < graph.numberOfVertices; ++i) {
				for (let j = 0; j < graph.vertices[i].neighbors.length; ++j) {
					if (graph.vertices[i].neighbors[j].node.name > graph.vertices[i].name)
						edges.push(new Edge(
							graph.vertices[i], 
							graph.vertices[i].neighbors[j].node, 
							graph.vertices[i].neighbors[j].edgeWeight
						));
				}
			}
		} else {
			for (let vertex of graph.vertices) {
				for (let neighbor of vertex.neighbors) {
					edges.push(new Edge(vertex, neighbor.node, neighbor.edgeWeight));
				}
			}
		}
		return edges; 
	}
	//copies a directed graph without setting the inNeighbors!!!
	copyDirectedGraph(graph: Graph): Graph {
		let vertices: Vertex[] = [];
		for (let vertex of graph.vertices) {
			vertices.push(new Vertex(vertex.name));
		}
		for (let i = 0; i < graph.numberOfVertices; ++i) {
			for (let j = 0; j < graph.vertices[i].neighbors.length; ++j) {
				vertices[i].neighbors.push(new Neighbor(
					vertices[graph.vertices.indexOf(graph.vertices[i].neighbors[j].node)], 
					graph.vertices[i].neighbors[j].edgeWeight));
			}
		}
		let tmp = new Graph(vertices, graph.name + ' copy');
		if (graph.directed)
			tmp.directed = true;
		if (graph.weighted)
			tmp.weighted = true;
		return tmp;
	}
}