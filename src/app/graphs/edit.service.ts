import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Graph } from './graph.model';

@Injectable()
export class EditService {
	graphSelected = new Subject();
	currentGraph: Graph = null;
	kosaraju: boolean = false;
	bellmanFord: boolean = false;
	johnson: boolean = false;
	kosarajuData = undefined;
	bellmanFordData = undefined;
	johnsonData = undefined;
	warningJ: boolean = false;
	warningBF: boolean = false;
}