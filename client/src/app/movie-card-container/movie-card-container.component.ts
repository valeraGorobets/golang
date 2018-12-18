import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../services/movies.service";

@Component({
  selector: 'movie-card-container',
  templateUrl: './movie-card-container.component.html',
  styleUrls: ['./movie-card-container.component.css']
})
export class MovieCardContainerComponent implements OnInit {
  public cardData = [];
  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit() {
    this.cardData = this.moviesService.getAllMovies();
  }

}
