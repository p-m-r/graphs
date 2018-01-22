import { Component, OnInit } from '@angular/core';

import { GraphService } from '../graph.service';
import { EditService } from '../edit.service';
import { Vertex } from '../../shared/vertex.model';
 
//TODO: instead of directly passing the ouptut of the algorithms
//create a stream throught which to pipe the output along with
//the information what type of output it is
@Component({
	selector: 'graph-menu',
	templateUrl: './graph-menu.component.html',
	styles: [
		'.space { margin-bottom: 15px }',
		'select { width: 70px; margin-left: 20px; }',
		'label { margin: 5px 0 0 25px; font-weight: normal; }',
		'.warning { color: rgb(169,68,66); margin-top: 5px; }'
	]
})
export class GraphMenuComponent {
	edit: boolean = true;
	bellmanFord: boolean = false;
	johnson: boolean = false;

	constructor(public graphService: GraphService, public editService: EditService) {}
	ngOnInit() {
		this.editService.graphSelected.subscribe((g) => { this.bellmanFord = false; this.johnson = false; });
	}
	onEdit() {
		this.edit = !this.edit;
	}
	onManipulate() {
		this.edit = false;
	}
	//
	onKosaraju() {
		if (!this.editService.kosaraju) {
			let tmp = this.graphService.stronglyConnectedComponents(this.editService.currentGraph);
			this.editService.kosarajuData = tmp;
			this.editService.kosaraju = true;
		} else {
			this.editService.kosaraju = false;
		}
	}
	onShowBellmanFordSelect() {
		this.editService.warningBF = false;
		if (!this.bellmanFord) {
			this.bellmanFord = true;
		} else {
			this.bellmanFord = false;
			this.editService.bellmanFord = false;
		}
	}
	onBellmanFord(index: number) {
		let bf_output;
		try {
			bf_output = this.graphService.shortestPathsFromVertexBellmanFord(
					this.editService.currentGraph, 
					this.editService.currentGraph.vertices[index]
				);
		} catch (e) {
			this.editService.warningBF = true;
			return;
		}
		//the source vertex isn't going to be considered in this object
		let path = {};
		for (let vertexName in bf_output[2]) {
			//we aren't considering the source vertex who doesn't have a predecessor
			if (bf_output[2][vertexName]) {
				path[vertexName] = ' ' + vertexName;
			}
		}
		for (let vertexName in path) {
			let curr = bf_output[2][vertexName].name;
			while (curr != bf_output[0]) {
				path[vertexName] = ' ' + curr + path[vertexName];
				if (bf_output[2][curr]) {
					curr = bf_output[2][curr].name;
				} else {
					break;
				}
			}
		}
		let output = [];
		output.push(bf_output[0]); //name of the vertex from which we calculate the paths
		output.push([]);
		output.push([]);
		output.push([]);
		for (let key in path) {
			output[1].push(key);	//name of the vertex
			output[2].push(bf_output[1][key]); //distance to the vertex
			output[3].push(path[key]); //path to the vertex
		}
		this.editService.bellmanFordData = output;
		this.editService.bellmanFord = true;
	}
	onShowJohnsonSelect() {
		this.editService.warningJ = false;
		if (!this.johnson) {
			this.johnson = true;
		} else {
			this.johnson = false;
			this.editService.johnson = false;
		}
	}
	onJohnson(index: number) {
		let j_output;
		try {
			j_output = this.graphService.shortestPathsForAllJohnson(this.editService.currentGraph);
		} catch (e) {
			this.editService.warningJ = true;
			return;
		}
		//stripping the data for the required vertex
		j_output = j_output[this.editService.currentGraph.vertices[index].name];
		//the source vertex isn't going to be considered in this object
		let path = {};
		for (let vertexName in j_output[2]) {
			//we aren't considering the source vertex who doesn't have a predecessor
			if (j_output[2][vertexName]) {
				path[vertexName] = ' ' + vertexName;
			}
		}
		for (let vertexName in path) {
			let curr = j_output[2][vertexName].name;
			while (curr != j_output[0]) {
				path[vertexName] = ' ' + curr + path[vertexName];
				if (j_output[2][curr]) {
					curr = j_output[2][curr].name;
				} else {
					break;
				}
			}
		}
		let output = [];
		output.push(j_output[0]); //name of the vertex from which we calculate the paths
		output.push([]);
		output.push([]);
		output.push([]);
		for (let key in path) {
			output[1].push(key);	//name of the vertex
			output[2].push(j_output[1][key]); //distance to the vertex
			output[3].push(path[key]); //path to the vertex
		}
		this.editService.johnsonData = output;
		this.editService.johnson = true;
	}
}