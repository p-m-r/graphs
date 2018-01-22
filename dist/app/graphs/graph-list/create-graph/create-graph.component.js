var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { GraphService } from '../../graph.service';
import { Graph } from '../../graph.model';
import { Vertex } from '../../../shared/vertex.model';
import { Neighbor } from '../../../shared/neighbor.model';
import { Edge } from '../../../shared/edge.model';
var CreateGraphComponent = (function () {
    function CreateGraphComponent(graphService) {
        this.graphService = graphService;
        this.mode = 'probability';
        this.name = '';
        this.vertices = 0;
        this.probability = 0;
        this.edges = 0;
        this.weighted = false;
        this.minWeight = 1;
        this.maxWeight = 1;
        this.directed = false;
        this.stronglyConnected = false;
        this.trialsNumber = 1;
        this.message = false;
        this.graphCreated = new EventEmitter();
    }
    CreateGraphComponent.prototype.calculateEdges = function () {
        var n = this.directed ? 2 : 1;
        var maxEdges = n * this.vertices * (this.vertices - 1) / 2;
        this.edges = Math.round(this.probability / 100 * maxEdges);
    };
    CreateGraphComponent.prototype.onSubmit = function () {
        if (!this.stronglyConnected) {
            if (this.mode == 'probability') {
                this.graphService.addGraph(this.createGraphFromProbability(this.vertices, this.probability, this.name));
            }
            else {
                this.graphService.addGraph(this.createGraphFromEdges(this.vertices, this.edges, this.name));
            }
            this.graphCreated.emit();
            this.message = false;
            var tmp = this.graphService.graphs[this.graphService.graphs.length - 1];
            try {
                //console.log('Bellman-Ford: ', this.graphService.shortestPathsFromVertexBellmanFord(tmp, tmp.vertices[0]));
                //console.log(this.graphService.shortestPathsForAllJohnson(tmp));
                //console.log(tmp, this.graphService.copyDirectedGraph(tmp));
            }
            catch (e) {
                console.log(e);
            }
            return;
        }
        else {
            var graph = undefined;
            var stronglyConnected = false;
            var trial = 0;
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
    };
    //method creates the required number of vertices and goes over each pair deciding 
    //whether the vertices will be connected based on the probability
    CreateGraphComponent.prototype.createGraphFromProbability = function (verticesNumber, probability, name) {
        //initializing the vertex list
        var vertices = [];
        for (var i = 0; i < this.vertices; ++i) {
            vertices.push(new Vertex((i + 1).toString()));
        }
        //generating the graph
        if (!this.directed) {
            if (!this.weighted) {
                for (var i = 0; i < vertices.length; ++i) {
                    for (var j = i + 1; j < vertices.length; ++j) {
                        if (this.randInt(0, 100) < probability) {
                            vertices[i].neighbors.push(new Neighbor(vertices[j], 1));
                            vertices[j].neighbors.push(new Neighbor(vertices[i], 1));
                        }
                    }
                }
            }
            else {
                for (var i = 0; i < vertices.length; ++i) {
                    for (var j = i + 1; j < vertices.length; ++j) {
                        if (this.randInt(0, 100) < probability) {
                            vertices[i].neighbors.push(new Neighbor(vertices[j], this.randInt(this.minWeight, this.maxWeight)));
                            vertices[j].neighbors.push(new Neighbor(vertices[i], this.randInt(this.minWeight, this.maxWeight)));
                        }
                    }
                }
            }
        }
        else {
            if (!this.weighted) {
                for (var i = 0; i < vertices.length; ++i) {
                    for (var j = 0; j < vertices.length; ++j) {
                        if (this.randInt(0, 100) < probability && i != j) {
                            vertices[i].neighbors.push(new Neighbor(vertices[j], 1));
                            vertices[j].incomingNeighbors.push(new Neighbor(vertices[i], 1));
                        }
                    }
                }
            }
            else {
                for (var i = 0; i < vertices.length; ++i) {
                    for (var j = 0; j < vertices.length; ++j) {
                        if (this.randInt(0, 100) < probability && i != j) {
                            var tmp = this.randInt(this.minWeight, this.maxWeight);
                            vertices[i].neighbors.push(new Neighbor(vertices[j], tmp));
                            vertices[j].incomingNeighbors.push(new Neighbor(vertices[i], tmp));
                        }
                    }
                }
            }
        }
        //sorting neighbors of the vertices by their name
        for (var _i = 0, vertices_1 = vertices; _i < vertices_1.length; _i++) {
            var vertex = vertices_1[_i];
            vertex.neighbors.sort(function (a, b) {
                if (parseInt(a.node.name, 10) > parseInt(b.node.name, 10))
                    return 1;
                else if (parseInt(a.node.name, 10) < parseInt(b.node.name, 10))
                    return -1;
                else
                    return 0;
            });
        }
        //creating the graph and setting its properties
        var graph = new Graph(vertices, name);
        if (this.weighted) {
            graph.weighted = true;
            graph.maxAbsEdgeWeight = Math.max(Math.abs(this.minWeight), Math.abs(this.maxWeight));
        }
        if (this.directed)
            graph.directed = true;
        return (graph);
    };
    //method creates an array of all possible edges and randomly chooses
    //the required number of them to be in the graph
    CreateGraphComponent.prototype.createGraphFromEdges = function (verticesNumber, edgesNumber, name) {
        //initializing the list of vertices
        var vertices = [];
        for (var i = 0; i < this.vertices; ++i) {
            vertices.push(new Vertex((i + 1).toString()));
        }
        //preparing the list of edges
        var edges = [];
        if (!this.directed) {
            if (!this.weighted) {
                for (var i = 0; i < vertices.length; ++i) {
                    for (var j = i + 1; j < vertices.length; ++j) {
                        edges.push(new Edge(vertices[i], vertices[j], 1));
                    }
                }
            }
            else {
                for (var i = 0; i < vertices.length; ++i) {
                    for (var j = i + 1; j < vertices.length; ++j) {
                        edges.push(new Edge(vertices[i], vertices[j], this.randInt(this.minWeight, this.maxWeight)));
                    }
                }
            }
        }
        else {
            if (!this.weighted) {
                for (var i = 0; i < vertices.length; ++i) {
                    for (var j = 0; j < vertices.length; ++j) {
                        if (i != j)
                            edges.push(new Edge(vertices[i], vertices[j], 1));
                    }
                }
            }
            else {
                for (var i = 0; i < vertices.length; ++i) {
                    for (var j = 0; j < vertices.length; ++j) {
                        if (i != j)
                            edges.push(new Edge(vertices[i], vertices[j], this.randInt(this.minWeight, this.maxWeight)));
                    }
                }
            }
        }
        //generating the graph
        if (!this.directed) {
            for (var i = 0; i < edgesNumber; ++i) {
                var edge = edges.splice(this.randInt(0, edges.length - 1), 1)[0];
                edge.node1.neighbors.push(new Neighbor(edge.node2, edge.weight));
                edge.node2.neighbors.push(new Neighbor(edge.node1, edge.weight));
            }
        }
        else {
            for (var i = 0; i < edgesNumber; ++i) {
                var edge = edges.splice(this.randInt(0, edges.length - 1), 1)[0];
                edge.node1.neighbors.push(new Neighbor(edge.node2, edge.weight));
                edge.node2.incomingNeighbors.push(new Neighbor(edge.node1, edge.weight));
            }
        }
        //sorting neighbors of the vertices by their name
        for (var _i = 0, vertices_2 = vertices; _i < vertices_2.length; _i++) {
            var vertex = vertices_2[_i];
            vertex.neighbors.sort(function (a, b) {
                if (parseInt(a.node.name, 10) > parseInt(b.node.name, 10))
                    return 1;
                else if (parseInt(a.node.name, 10) < parseInt(b.node.name, 10))
                    return -1;
                else
                    return 0;
            });
        }
        //creating the graph and setting its properties
        var graph = new Graph(vertices, name);
        if (this.weighted) {
            graph.weighted = true;
            graph.maxAbsEdgeWeight = Math.max(Math.abs(this.minWeight), Math.abs(this.maxWeight));
        }
        if (this.directed)
            graph.directed = true;
        return (graph);
    };
    CreateGraphComponent.prototype.setStronglyConnected = function () {
        if (!this.directed)
            this.stronglyConnected = false;
    };
    CreateGraphComponent.prototype.setMode = function () {
        if (this.stronglyConnected) {
            this.mode = 'probability';
        }
    };
    //returns a random integer between min and max (both inclusive)
    CreateGraphComponent.prototype.randInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return CreateGraphComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], CreateGraphComponent.prototype, "graphCreated", void 0);
CreateGraphComponent = __decorate([
    Component({
        selector: 'create-graph',
        templateUrl: './create-graph.component.html',
        styleUrls: ['./create-graph.component.css']
    }),
    __metadata("design:paramtypes", [GraphService])
], CreateGraphComponent);
export { CreateGraphComponent };
