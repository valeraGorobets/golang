import {Component, EventEmitter, Output} from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
	selector: 'adding-new-movie',
	templateUrl: './adding-new-movie.component.html',
	styleUrls: ['./adding-new-movie.component.css']
})
export class AddingNewMovieComponent {
	@Output() moviesListChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

	public genres: string[] = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Historical', 'Thriller', 'Other'];
	public model: any = {};

	constructor(
		private moviesService: MoviesService,
	) { }

	onSubmit() {
		this.moviesService.addMovie({
			'id': Date.now().toString(),
			'src': 'https://placeimg.com/480/360/any',
			'name': this.model.movieName,
			'year': this.model.year,
			'genre': this.model.genre
		}).subscribe((result: any) => {
			if (Object.keys(result)) {
				this.moviesListChanged.emit(true);
			} else {
				this.moviesListChanged.emit(false);
			}
		});
	}
}
