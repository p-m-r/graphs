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
var AdjacencyListComponent = (function () {
    function AdjacencyListComponent(editService) {
        this.editService = editService;
        this.graph = null;
    }
    AdjacencyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.graph = this.editService.currentGraph;
        this.editService.graphSelected.subscribe(function (graph) { return _this.graph = graph; });
    };
    return AdjacencyListComponent;
}());
AdjacencyListComponent = __decorate([
    Component({
        selector: 'adjacency-list',
        templateUrl: './adjacency-list.component.html',
        styleUrls: ['./adjacency-list.component.css']
    }),
    __metadata("design:paramtypes", [EditService])
], AdjacencyListComponent);
export { AdjacencyListComponent };
