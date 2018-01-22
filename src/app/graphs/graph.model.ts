import { Vertex } from '../shared/vertex.model';

//class representing a graph. it is important to note
//that the vertices should be sorted by name at all times
//for all the algorithms to work correctly
//TODO: create methods for adding and removing vertices/edges here
//and implement sorting when adding; also implement a getter for max and min
//edge values; the vertices in a graph need to have unique names
export class Graph {
	public name: string = '';
	public id: number = -1;
	public vertices: Vertex[];
	public weighted: boolean = false;
	public directed: boolean = false;
	public stronglyConnected: boolean = false;
	public maxAbsEdgeWeight: number = 1;

	constructor(vertices: Vertex[], name: string) {
		this.vertices = vertices;
		this.name = name;
	}
	get numberOfVertices() {
		return this.vertices.length;
	}
	get numberOfEdges(): number {
		let tmp = 0;
		for (let i = 0; i < this.vertices.length; ++i) {
			tmp += this.vertices[i].neighbors.length;
		}
		if (!this.directed)
			tmp /= 2;
		return tmp;
	}
	toString() {
		let tmp = 'v: ' + this.numberOfVertices + ', e: ' + this.numberOfEdges;
		if (this.directed)
			tmp += ', d';
		if (this.stronglyConnected)
			tmp += ', sc';
		if (this.weighted)
			tmp += ', w';
		return tmp;
	}
}