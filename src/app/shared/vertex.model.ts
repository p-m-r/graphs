import { Neighbor } from './neighbor.model';

//class representing a vertex. it is important to note 
//that the neighbours should be sorted by the name of the node 
//at all times for all the algorithms to work correctly
export class Vertex {
	public name: string = '';
	public neighbors: Neighbor[] = [];
	//stores the vertices that this vertex is a neighbor of 
	//in a directed graph
	public incomingNeighbors: Neighbor[] = [];

	constructor(name: string) {
		this.name = name;
	}

	get degree() {
		return this.neighbors.length;
	}
}