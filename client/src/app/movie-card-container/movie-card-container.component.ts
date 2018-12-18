import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from '../services/movies.service';

@Component({
	selector: 'movie-card-container',
	templateUrl: './movie-card-container.component.html',
	styleUrls: ['./movie-card-container.component.css']
})
export class MovieCardContainerComponent implements OnInit {
	@Input() public cardData = [];

	constructor(
		private moviesService: MoviesService,
	) { }

	ngOnInit() {
		// this.moviesService.getAllMovies()
		// 	.subscribe((result: any) => {
		// 		this.cardData = result.Database.map(movie => typeof movie === 'string' ? JSON.parse(movie) : movie);
		// 		console.log(this.cardData);
		// 	});

	}

}
