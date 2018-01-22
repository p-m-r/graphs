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
//TODO: instead of directly passing the ouptut of the algorithms
//create a stream throught which to pipe the output along with
//the information what type of output it is
var GraphMenuComponent = (function () {
    function GraphMenuComponent(graphService, editService) {
        this.graphService = graphService;
        this.editService = editService;
        this.edit = true;
        this.bellmanFord = false;
        this.johnson = false;
    }
    GraphMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editService.graphSelected.subscribe(function (g) { _this.bellmanFord = false; _this.johnson = false; });
    };
    GraphMenuComponent.prototype.onEdit = function () {
        this.edit = !this.edit;
    };
    GraphMenuComponent.prototype.onManipulate = function () {
        this.edit = false;
    };
    //
    GraphMenuComponent.prototype.onKosaraju = function () {
        if (!this.editService.kosaraju) {
            var tmp = this.graphService.stronglyConnectedComponents(this.editService.currentGraph);
            this.editService.kosarajuData = tmp;
            this.editService.kosaraju = true;
        }
        else {
            this.editService.kosaraju = false;
        }
    };
    GraphMenuComponent.prototype.onShowBellmanFordSelect = function () {
        this.editService.warningBF = false;
        if (!this.bellmanFord) {
            this.bellmanFord = true;
        }
        else {
            this.bellmanFord = false;
            this.editService.bellmanFord = false;
        }
    };
    GraphMenuComponent.prototype.onBellmanFord = function (index) {
        var bf_output;
        try {
            bf_output = this.graphService.shortestPathsFromVertexBellmanFord(this.editService.currentGraph, this.editService.currentGraph.vertices[index]);
        }
        catch (e) {
            this.editService.warningBF = true;
            return;
        }
        //the source vertex isn't going to be considered in this object
        var path = {};
        for (var vertexName in bf_output[2]) {
            //we aren't considering the source vertex who doesn't have a predecessor
            if (bf_output[2][vertexName]) {
                path[vertexName] = ' ' + vertexName;
            }
        }
        for (var vertexName in path) {
            var curr = bf_output[2][vertexName].name;
            while (curr != bf_output[0]) {
                path[vertexName] = ' ' + curr + path[vertexName];
                if (bf_output[2][curr]) {
                    curr = bf_output[2][curr].name;
                }
                else {
                    break;
                }
            }
        }
        var output = [];
        output.push(bf_output[0]); //name of the vertex from which we calculate the paths
        output.push([]);
        output.push([]);
        output.push([]);
        for (var key in path) {
            output[1].push(key); //name of the vertex
            output[2].push(bf_output[1][key]); //distance to the vertex
            output[3].push(path[key]); //path to the vertex
        }
        this.editService.bellmanFordData = output;
        this.editService.bellmanFord = true;
    };
    GraphMenuComponent.prototype.onShowJohnsonSelect = function () {
        this.editService.warningJ = false;
        if (!this.johnson) {
            this.johnson = true;
        }
        else {
            this.johnson = false;
            this.editService.johnson = false;
        }
    };
    GraphMenuComponent.prototype.onJohnson = function (index) {
        var j_output;
        try {
            j_output = this.graphService.shortestPathsForAllJohnson(this.editService.currentGraph);
        }
        catch (e) {
            this.editService.warningJ = true;
            return;
        }
        //stripping the data for the required vertex
        j_output = j_output[this.editService.currentGraph.vertices[index].name];
        //the source vertex isn't going to be considered in this object
        var path = {};
        for (var vertexName in j_output[2]) {
            //we aren't considering the source vertex who doesn't have a predecessor
            if (j_output[2][vertexName]) {
                path[vertexName] = ' ' + vertexName;
            }
        }
        for (var vertexName in path) {
            var curr = j_output[2][vertexName].name;
            while (curr != j_output[0]) {
                path[vertexName] = ' ' + curr + path[vertexName];
                if (j_output[2][curr]) {
                    curr = j_output[2][curr].name;
                }
                else {
                    break;
                }
            }
        }
        var output = [];
        output.push(j_output[0]); //name of the vertex from which we calculate the paths
        output.push([]);
        output.push([]);
        output.push([]);
        for (var key in path) {
            output[1].push(key); //name of the vertex
            output[2].push(j_output[1][key]); //distance to the vertex
            output[3].push(path[key]); //path to the vertex
        }
        this.editService.johnsonData = output;
        this.editService.johnson = true;
    };
    return GraphMenuComponent;
}());
GraphMenuComponent = __decorate([
    Component({
        selector: 'graph-menu',
        templateUrl: './graph-menu.component.html',
        styles: [
            '.space { margin-bottom: 15px }',
            'select { width: 70px; margin-left: 20px; }',
            'label { margin: 5px 0 0 25px; font-weight: normal; }',
            '.warning { color: rgb(169,68,66); margin-top: 5px; }'
        ]
    }),
    __metadata("design:paramtypes", [GraphService, EditService])
], GraphMenuComponent);
export { GraphMenuComponent };
