/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

/**
 * Movie class.
 *
 * @constructor
 * @param {String} title - movie title.
 * @param {String} director  - director.
 * @param {Number} budget  - budget.
 */


class Movie {
    constructor(title, director, budget) {
      this.title = title;
      this.director = director;
      this.budget = budget;

    }

     wasExpensive() {
        if(this.budget > 100000000) {
            return true;
        } else {
            return false;
        }
    }
  }
  
const movie = new Movie('test','test2', 1230000000000);
console.log(movie.wasExpensive());