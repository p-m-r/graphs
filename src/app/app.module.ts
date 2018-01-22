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
 
@NgModule({
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
export class AppModule {}