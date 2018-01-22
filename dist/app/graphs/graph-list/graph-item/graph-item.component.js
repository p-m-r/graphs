var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Graph } from '../../graph.model';
var GraphItemComponent = (function () {
    function GraphItemComponent() {
        this.selected = false;
    }
    return GraphItemComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Graph)
], GraphItemComponent.prototype, "graph", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], GraphItemComponent.prototype, "selected", void 0);
GraphItemComponent = __decorate([
    Component({
        selector: 'graph-item',
        template: "<a class=\"list-group-item\" [ngClass]=\"{ 'active': selected }\">\n\t\t{{graph.name}} \n\t\t<span class=\"graph-info\">\n\t\t\t{{graph}}\n\t\t</span>\n\t </a>",
        styles: [
            '.graph-info { color: rgb(180, 180, 180); white-space: nowrap; }'
        ]
    })
], GraphItemComponent);
export { GraphItemComponent };
