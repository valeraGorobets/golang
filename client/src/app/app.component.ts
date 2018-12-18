import {Component, OnInit} from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	public cardData = [];
	constructor(
		private moviesService: MoviesService,
	) { }

	ngOnInit() {
		this.updateMovies();
	}

	public onMoviesChanged(event: any) {
		if (event) {
			this.updateMovies();
		} else {
			alert('Smt went wrong ((');
		}
	}

	private updateMovies(): void {
		this.moviesService.getAllMovies().subscribe(data => {
			this.cardData = data.Database
				.map(d => typeof d === 'string' ? JSON.parse(d) : d)
				.reverse();
			console.log(this.cardData);
		});
	}
}
