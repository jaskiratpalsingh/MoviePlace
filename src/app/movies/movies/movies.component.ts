import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(){
    this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
    });
  }
  

}