var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Vertex } from '../shared/vertex.model';
import { Graph } from './graph.model';
import { Edge } from '../shared/edge.model';
import { Neighbor } from '../shared/neighbor.model';
var GraphService = (function () {
    function GraphService() {
        this.graphs = [];
        this.currentId = 0;
        /*for (let graph of MOCK_GRAPHS) {
            graph.id = this.currentId;
            ++this.currentId;
            this.graphs.push(graph);
        }*/
    }
    GraphService.prototype.getGraphs = function () {
        return this.graphs;
    };
    GraphService.prototype.addGraph = function (graph) {
        graph.id = this.currentId;
        ++this.currentId;
        this.graphs.push(graph);
    };
    GraphService.prototype.updateGraph = function () {
    };
    //finds the strongly connected components of a directed graph
    //using Kosaraju's algorithm
    GraphService.prototype.stronglyConnectedComponents = function (graph) {
        //an ordered list of vertices
        var L = [];
        //object storing information about whether the given vertex
        //has been visited or not
        var vertexInfo = {};
        for (var _i = 0, _a = graph.vertices; _i < _a.length; _i++) {
            var vertex = _a[_i];
            vertexInfo[vertex.name] = false;
        }
        for (var _b = 0, _c = graph.vertices; _b < _c.length; _b++) {
            var vertex = _c[_b];
            this.scc_visit(vertex, vertexInfo, L);
        }
        //now vertexInfo stores information about whether the given vertex
        //has been assigned to a component
        for (var _d = 0, _e = graph.vertices; _d < _e.length; _d++) {
            var vertex = _e[_d];
            vertexInfo[vertex.name] = false;
        }
        //object storing the strongly connected components of the graph
        //each component will be a separate property whose name is the root
        //of the component, and the value an array of vertices belonging to it
        var components = {};
        for (var _f = 0, L_1 = L; _f < L_1.length; _f++) {
            var vertex = L_1[_f];
            this.scc_assign(vertex, vertex, vertexInfo, components);
        }
        //converting the output into a more convenient form
        var output = [];
        for (var component in components) {
            output.push(components[component]);
        }
        if (output.length > 1) {
            output.sort(function (a, b) {
                if (a.length > b.length)
                    return 1;
                else if (a.length < b.length)
                    return -1;
                else
                    return 0;
            });
        }
        return output;
    };
    GraphService.prototype.scc_visit = function (node, vertexInfo, L) {
        if (!vertexInfo[node.name]) {
            vertexInfo[node.name] = true;
            for (var _i = 0, _a = node.neighbors; _i < _a.length; _i++) {
                var neighbor = _a[_i];
                this.scc_visit(neighbor.node, vertexInfo, L);
            }
            L.unshift(node);
        }
    };
    GraphService.prototype.scc_assign = function (node, root, vertexInfo, components) {
        if (!vertexInfo[node.name]) {
            vertexInfo[node.name] = true;
            if (!components[root.name])
                components[root.name] = [];
            components[root.name].push(node);
            for (var _i = 0, _a = node.incomingNeighbors; _i < _a.length; _i++) {
                var inNeighbor = _a[_i];
                this.scc_assign(inNeighbor.node, root, vertexInfo, components);
            }
        }
    };
    //finds shortest paths from the source vertex to all the other
    //vertices on a directed graph using Bellman-Ford algorithm.
    //negative edge weights are permitted, throws an error
    //when a negative cycle is detected
    GraphService.prototype.shortestPathsFromVertexBellmanFord = function (graph, source) {
        if (!graph.directed)
            throw 'Not a directed graph';
        var distance = {};
        var predecessor = {};
        var edges = this.getEdges(graph);
        for (var _i = 0, _a = graph.vertices; _i < _a.length; _i++) {
            var vertex = _a[_i];
            distance[vertex.name] = Infinity;
            predecessor[vertex.name] = null;
        }
        distance[source.name] = 0;
        for (var i = 1; i < graph.numberOfVertices; ++i) {
            for (var _b = 0, edges_1 = edges; _b < edges_1.length; _b++) {
                var edge = edges_1[_b];
                if (distance[edge.node1.name] + edge.weight < distance[edge.node2.name]) {
                    distance[edge.node2.name] = distance[edge.node1.name] + edge.weight;
                    predecessor[edge.node2.name] = edge.node1;
                }
            }
        }
        //checking for negative cycles
        for (var _c = 0, edges_2 = edges; _c < edges_2.length; _c++) {
            var edge = edges_2[_c];
            if (distance[edge.node1.name] + edge.weight < distance[edge.node2.name]) {
                throw 'Negative cycle detected.';
            }
        }
        var tmp = source;
        return [source.name, distance, predecessor];
    };
    //finds shortest paths from the source vertex to all the other
    //vertices using Dijkstra's algorithm
    //(no negative weights permitted)
    GraphService.prototype.shortestPathsFromVertexDijkstra = function (graph, source) {
        var unvisited = [];
        var getMinDist = function (unvisited, distance) {
            var min = unvisited[0];
            for (var _i = 0, unvisited_1 = unvisited; _i < unvisited_1.length; _i++) {
                var el = unvisited_1[_i];
                if (distance[el.name] < distance[min.name]) {
                    min = el;
                }
            }
            return min;
        };
        var distance = {};
        var predecessor = {};
        for (var _i = 0, _a = graph.vertices; _i < _a.length; _i++) {
            var vertex = _a[_i];
            distance[vertex.name] = Infinity;
            predecessor[vertex.name] = null;
            unvisited.push(vertex);
        }
        distance[source.name] = 0;
        while (unvisited.length > 0) {
            var vertex = getMinDist(unvisited, distance);
            unvisited.splice(unvisited.indexOf(vertex), 1);
            for (var _b = 0, _c = vertex.neighbors; _b < _c.length; _b++) {
                var neighbor = _c[_b];
                if (distance[vertex.name] + neighbor.edgeWeight < distance[neighbor.node.name]) {
                    distance[neighbor.node.name] = distance[vertex.name] + neighbor.edgeWeight;
                    predecessor[neighbor.node.name] = vertex;
                }
            }
        }
        return [source.name, distance, predecessor];
    };
    //looks for shortest paths for all pairs of vertices in a weighted directed graph
    //using Johnson's technique (uses Bellman-Ford as well as Dijkstra's algorithms)
    //edges can have negative weights, but no negative cycles are permitted
    //TODO: proper error handling
    GraphService.prototype.shortestPathsForAllJohnson = function (graph) {
        var g = this.copyDirectedGraph(graph);
        var q = new Vertex('0');
        for (var _i = 0, _a = g.vertices; _i < _a.length; _i++) {
            var vertex = _a[_i];
            q.neighbors.push(new Neighbor(vertex, 0));
        }
        g.vertices.unshift(q);
        var distances;
        try {
            distances = this.shortestPathsFromVertexBellmanFord(g, q)[1];
        }
        catch (e) {
            throw e;
        }
        g.vertices.splice(g.vertices.indexOf(q), 1);
        for (var _b = 0, _c = g.vertices; _b < _c.length; _b++) {
            var vertex = _c[_b];
            for (var _d = 0, _e = vertex.neighbors; _d < _e.length; _d++) {
                var neighbor = _e[_d];
                neighbor.edgeWeight +=
                    distances[vertex.name] -
                        distances[neighbor.node.name];
            }
        }
        var output = {};
        for (var _f = 0, _g = g.vertices; _f < _g.length; _f++) {
            var vertex = _g[_f];
            output[vertex.name] = this.shortestPathsFromVertexDijkstra(g, vertex);
        }
        return output;
    };
    //returns an array containing all the edges in a graph
    GraphService.prototype.getEdges = function (graph) {
        var edges = [];
        if (!graph.directed) {
            for (var i = 0; i < graph.numberOfVertices; ++i) {
                for (var j = 0; j < graph.vertices[i].neighbors.length; ++j) {
                    if (graph.vertices[i].neighbors[j].node.name > graph.vertices[i].name)
                        edges.push(new Edge(graph.vertices[i], graph.vertices[i].neighbors[j].node, graph.vertices[i].neighbors[j].edgeWeight));
                }
            }
        }
        else {
            for (var _i = 0, _a = graph.vertices; _i < _a.length; _i++) {
                var vertex = _a[_i];
                for (var _b = 0, _c = vertex.neighbors; _b < _c.length; _b++) {
                    var neighbor = _c[_b];
                    edges.push(new Edge(vertex, neighbor.node, neighbor.edgeWeight));
                }
            }
        }
        return edges;
    };
    //copies a directed graph without setting the inNeighbors!!!
    GraphService.prototype.copyDirectedGraph = function (graph) {
        var vertices = [];
        for (var _i = 0, _a = graph.vertices; _i < _a.length; _i++) {
            var vertex = _a[_i];
            vertices.push(new Vertex(vertex.name));
        }
        for (var i = 0; i < graph.numberOfVertices; ++i) {
            for (var j = 0; j < graph.vertices[i].neighbors.length; ++j) {
                vertices[i].neighbors.push(new Neighbor(vertices[graph.vertices.indexOf(graph.vertices[i].neighbors[j].node)], graph.vertices[i].neighbors[j].edgeWeight));
            }
        }
        var tmp = new Graph(vertices, graph.name + ' copy');
        if (graph.directed)
            tmp.directed = true;
        if (graph.weighted)
            tmp.weighted = true;
        return tmp;
    };
    return GraphService;
}());
GraphService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], GraphService);
export { GraphService };
