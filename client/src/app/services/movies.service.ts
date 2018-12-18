import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MoviesService {
	constructor(
		private http: HttpClient,
	) { }

	public getAllMovies(): Observable<any> {
		return this.http.get('/allMoviesWithInfo');
	}

	public addMovie(body: any) {
		return this.http.post('/addNewMovie', body);
	}
}
