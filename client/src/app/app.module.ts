import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieCardContainerComponent } from './movie-card-container/movie-card-container.component';
import {MoviesService} from "./services/movies.service";

@NgModule({
	declarations: [
		AppComponent,
		MovieCardComponent,
		MovieCardContainerComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule
	],
	providers: [HttpClientModule, MoviesService ],
	bootstrap: [AppComponent]
})
export class AppModule { }
