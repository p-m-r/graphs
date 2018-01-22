var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { GraphListComponent } from './graphs/graph-list/graph-list.component';
import { GraphMenuComponent } from './graphs/graph-menu/graph-menu.component';
import { CreateGraphComponent } from './graphs/graph-list/create-graph/create-graph.component';
import { GraphEditComponent } from './graphs/graph-menu/graph-edit/graph-edit.component';
import { GraphManipulateComponent } from './graphs/graph-menu/graph-manipulate/graph-manipulate.component';
import { GraphItemComponent } from './graphs/graph-list/graph-item/graph-item.component';
import { DisplayComponent } from './display/display.component';
import { AdjacencyListComponent } from './display/adjacency-list/adjacency-list.component';
import { AdjacencyMatrixComponent } from './display/adjacency-matrix/adjacency-matrix.component';
import { IncidenceMatrixComponent } from './display/incidence-matrix/incidence-matrix.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            CanvasComponent,
            GraphListComponent,
            GraphMenuComponent,
            CreateGraphComponent,
            GraphMenuComponent,
            GraphEditComponent,
            GraphManipulateComponent,
            GraphItemComponent,
            DisplayComponent,
            AdjacencyListComponent,
            AdjacencyMatrixComponent,
            IncidenceMatrixComponent
        ],
        imports: [
            BrowserModule,
            FormsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
