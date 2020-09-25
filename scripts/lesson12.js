

'use strict'; 

 let NumberOfFilms; 

 NumberOfFilms = +prompt("Сколько фильмов?", "");



let personalMovieDB = {
count: NumberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

const a = prompt("Один из последних фильмов", "");
const b = prompt("Оценка", "");
const c = prompt("Один из последних фильмов", "");
const d = prompt("Оценка", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

document.write(`Ответ - ${personalMovieDB.movies}`);