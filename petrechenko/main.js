const numberOfFilms = +prompt("Сколько фильмов вы смотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let key = prompt("Один из просмотренных фильмом?");
let value = prompt("На сколько оцените его?");

let key1 = prompt("Один из просмотренных фильмом?");
let value1 = prompt("На сколько оцените его?");

personalMovieDB.movies[key] = value;
personalMovieDB.movies[key1] = value1;

 
console.log(personalMovieDB);