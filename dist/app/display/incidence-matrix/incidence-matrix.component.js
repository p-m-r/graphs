var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { EditService } from '../../graphs/edit.service';
import { Edge } from '../../shared/edge.model';
var IncidenceMatrixComponent = (function () {
    function IncidenceMatrixComponent(editService) {
        this.editService = editService;
        this.graph = null;
        this.edges = [];
        this.colWidth = 0;
    }
    IncidenceMatrixComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.editService.currentGraph) {
            this.graph = this.editService.currentGraph;
            this.getEdges();
        }
        this.editService.graphSelected.subscribe(function (graph) {
            _this.graph = graph;
            _this.getEdges();
        });
    };
    IncidenceMatrixComponent.prototype.getEdgeWeight = function (vertex, edge) {
        if (edge.node1 == vertex) {
            return edge.weight;
        }
        else if (edge.node2 == vertex) {
            if (!this.graph.directed) {
                return edge.weight;
            }
            else {
                return '(' + edge.weight + ')';
            }
        }
        else {
            return 0;
        }
    };
    IncidenceMatrixComponent.prototype.getEdges = function () {
        var edges = [];
        if (!this.graph.directed) {
            for (var i = 0; i < this.graph.numberOfVertices; ++i) {
                for (var j = 0; j < this.graph.vertices[i].neighbors.length; ++j) {
                    //we are making sure that we don't add any edge two times
                    if (this.graph.vertices[i].name < this.graph.vertices[i].neighbors[j].node.name) {
                        edges.push(new Edge(this.graph.vertices[i], this.graph.vertices[i].neighbors[j].node, this.graph.vertices[i].neighbors[j].edgeWeight));
                    }
                }
            }
        }
        else {
            for (var i = 0; i < this.graph.numberOfVertices; ++i) {
                for (var j = 0; j < this.graph.vertices[i].neighbors.length; ++j) {
                    edges.push(new Edge(this.graph.vertices[i], this.graph.vertices[i].neighbors[j].node, this.graph.vertices[i].neighbors[j].edgeWeight));
                }
            }
        }
        this.colWidth = 12 + 6 * this.graph.maxAbsEdgeWeight.toString().length;
        this.edges = edges;
    };
    return IncidenceMatrixComponent;
}());
IncidenceMatrixComponent = __decorate([
    Component({
        selector: 'incidence-matrix',
        templateUrl: './incidence-matrix.component.html',
        styleUrls: ['./incidence-matrix.component.css']
    }),
    __metadata("design:paramtypes", [EditService])
], IncidenceMatrixComponent);
export { IncidenceMatrixComponent };
