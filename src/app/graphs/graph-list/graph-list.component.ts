import { Component, OnInit } from '@angular/core';

import { Graph } from '../graph.model';
import { CreateGraphComponent } from './create-graph/create-graph.component';
import { GraphItemComponent } from './graph-item/graph-item.component';
import { GraphService } from '../graph.service';
import { EditService } from '../edit.service';

@Component({
	selector: 'graph-list',
	templateUrl: './graph-list.component.html',
	styles: ['.bg { background-color: rgb(85, 93, 97) }']
})
export class GraphListComponent implements OnInit{
	graphs: Graph[];
	selectedId: number = undefined;

	create: boolean = false;

	constructor(private graphService: GraphService, private editService: EditService) {}

	ngOnInit() {
		this.graphs = this.graphService.getGraphs();
	}

	onCreate() {
		this.create = !this.create;
	}

	importGraphs() {
		this.graphs = this.graphService.getGraphs();
	}

	onSelect(index: number) {
		let graph = this.graphs.slice(index)[0];
		this.selectedId = graph.id;
		this.editService.bellmanFord = false;
		this.editService.kosaraju = false;
		this.editService.johnson = false;
		this.editService.currentGraph = graph;
		this.editService.graphSelected.next(graph);
	}
	selectedGraph(graph: Graph): boolean {
		return graph.id == this.selectedId;
	}
}