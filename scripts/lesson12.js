

'use strict'; 

 
 let i;
  const filmsCount = +prompt("Сколько фильмов смотрел?", "");
  let userInputCount = +prompt("Сколько фильмов занести?");


let personalMovieDB = {
count: filmsCount,
movies: {},
actors: {},
genres: [],
privat: false
};

writeYourGenres();


for (i=1; i <= userInputCount; i++){

            let a = prompt("Один из последних фильмов", "");
            console.log(a);
            let b = prompt("Оценка", "");
        if (a.length >= 50){
            console.log("Эй, не так много символов");
            i = 1;
        } else if (a.length <= 0){
            console.log("Ты ничего не ввел");
            i--;
        }
       
             personalMovieDB.movies[a] = b;
}
    if (personalMovieDB.count < 10){
        console.log('очень мало, друг мой');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30){
            console.log("Классический зритель");
    } else if (personalMovieDB.count > 30){
        console.log('Киноман');
    } else { 
        console.log('ошибка');
    }

console.log(personalMovieDB);

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
1
function showMyDb () {
return console.log(personalMovieDB);
}

function writeYourGenres (){
    for (let j = 1; j <= 3; j++){
        let userAnswer = prompt(`введите жанр ${j}`, ``);
        personalMovieDB.genres[j-1] = userAnswer; 
    }
}