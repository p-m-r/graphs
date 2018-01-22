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
import { GraphService } from '../graph.service';
import { EditService } from '../edit.service';
var GraphListComponent = (function () {
    function GraphListComponent(graphService, editService) {
        this.graphService = graphService;
        this.editService = editService;
        this.selectedId = undefined;
        this.create = false;
    }
    GraphListComponent.prototype.ngOnInit = function () {
        this.graphs = this.graphService.getGraphs();
    };
    GraphListComponent.prototype.onCreate = function () {
        this.create = !this.create;
    };
    GraphListComponent.prototype.importGraphs = function () {
        this.graphs = this.graphService.getGraphs();
    };
    GraphListComponent.prototype.onSelect = function (index) {
        var graph = this.graphs.slice(index)[0];
        this.selectedId = graph.id;
        this.editService.bellmanFord = false;
        this.editService.kosaraju = false;
        this.editService.johnson = false;
        this.editService.currentGraph = graph;
        this.editService.graphSelected.next(graph);
    };
    GraphListComponent.prototype.selectedGraph = function (graph) {
        return graph.id == this.selectedId;
    };
    return GraphListComponent;
}());
GraphListComponent = __decorate([
    Component({
        selector: 'graph-list',
        templateUrl: './graph-list.component.html',
        styles: ['.bg { background-color: rgb(85, 93, 97) }']
    }),
    __metadata("design:paramtypes", [GraphService, EditService])
], GraphListComponent);
export { GraphListComponent };
