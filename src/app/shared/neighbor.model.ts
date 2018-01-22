import { Vertex } from './vertex.model';
 
export class Neighbor {
	public node: Vertex;
	public edgeWeight: number;

	constructor(node: Vertex, edgeWeight: number) {
		this.node = node;
		this.edgeWeight = edgeWeight;
	}
}