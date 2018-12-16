import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public title = 'Hello world!';

	constructor(
		private http: HttpClient,
	) {}

	addNewMovie(): void {
		this.addNewMovieService().subscribe((result: any) => {
			console.log(result);
		});
	}

	addNewMovieService(): Observable<any> {
		return this.http.post('/addNewMovie', {
			'name': 'Movie' + Date.now(),
			'year': 2018,
			'genre': 'Action'
		});
	}

	getVideo(): void {
		this.getVideoService()
			.subscribe((result: any) => {
				console.log(result);
				this.title = result.Name;
			});
	}

	getVideoService(): Observable<any> {
		return this.http.get('/video');
	}
}
