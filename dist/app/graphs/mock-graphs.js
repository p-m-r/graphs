import { Graph } from './graph.model';
import { Vertex } from '../shared/vertex.model';
import { Neighbor } from '../shared/neighbor.model';
var vert1 = new Vertex('1');
var vert2 = new Vertex('2');
var vert3 = new Vertex('3');
vert1.neighbors.push(new Neighbor(vert2, 1), new Neighbor(vert3, 1));
vert2.neighbors.push(new Neighbor(vert1, 1));
vert3.neighbors.push(new Neighbor(vert1, 1));
var vert4 = new Vertex('1');
var vert5 = new Vertex('2');
vert4.neighbors.push(new Neighbor(vert5, 1));
vert5.neighbors.push(new Neighbor(vert4, 1));
var vert6 = new Vertex('1');
var vert7 = new Vertex('2');
var vert8 = new Vertex('3');
var vert9 = new Vertex('4');
export var MOCK_GRAPHS = [
    new Graph([vert1, vert2, vert3], 'first mock graph'),
    new Graph([vert4, vert5], 'second mock graph')
];
