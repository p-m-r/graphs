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
var AdjacencyMatrixComponent = (function () {
    function AdjacencyMatrixComponent(editService) {
        this.editService = editService;
        this.graph = null;
        this.colWidth = 0;
    }
    AdjacencyMatrixComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.editService.currentGraph) {
            this.graph = this.editService.currentGraph;
            this.setColWidth();
        }
        this.editService.graphSelected.subscribe(function (graph) {
            _this.graph = graph;
            _this.setColWidth();
        });
    };
    AdjacencyMatrixComponent.prototype.getEdgeWeight = function (vertex1, vertex2) {
        for (var _i = 0, _a = vertex1.neighbors; _i < _a.length; _i++) {
            var neighbor = _a[_i];
            if (neighbor.node == vertex2) {
                return neighbor.edgeWeight;
            }
        }
        return 0;
    };
    AdjacencyMatrixComponent.prototype.setColWidth = function () {
        this.colWidth = 12 + 6 * this.graph.maxAbsEdgeWeight.toString().length;
    };
    return AdjacencyMatrixComponent;
}());
AdjacencyMatrixComponent = __decorate([
    Component({
        selector: 'adjacency-matrix',
        templateUrl: './adjacency-matrix.component.html',
        styleUrls: ['./adjacency-matrix.component.css']
    }),
    __metadata("design:paramtypes", [EditService])
], AdjacencyMatrixComponent);
export { AdjacencyMatrixComponent };
