import { Vertex } from './vertex.model';

//a class for conveniently storing edges when executing some of the algorithms
//if the graph is directed, then node1 is treated as the source node and
//node2 as the destination node
export class Edge {
	public node1: Vertex;
	public node2: Vertex;
	public weight: number;

	constructor(vertex1: Vertex, vertex2: Vertex, weight: number) {
		this.node1 = vertex1;
		this.node2 = vertex2;
		this.weight = weight;
	}
}