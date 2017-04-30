import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CanvasComponent } from './canvas/canvas.component';
import { GraphListComponent } from './graphs/graph-list/graph-list.component';
import { GraphMenuComponent } from './graphs/graph-menu/graph-menu.component';

@NgModule({
	declarations: [
		AppComponent,
		CanvasComponent,
		GraphListComponent,
		GraphMenuComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		RouterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}