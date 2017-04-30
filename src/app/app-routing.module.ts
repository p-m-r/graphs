import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanvasComponent } from './canvas/canvas.component';
import { GraphListComponent } from './graphs/graph-list/graph-list.component';
import { GraphMenuComponent } from './graphs/graph-menu/graph-menu.component';

const appRoutes: Routes = [
	{path: '', component: CanvasComponent },
	{path: 'graph-list', component: GraphListComponent },
	{path: 'graph-menu', component: GraphMenuComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exprots: [RouterModule]
})
export class AppRoutingModule {

}