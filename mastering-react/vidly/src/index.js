import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import movies, {
  getMovies,
  getMovie,
  saveMovie,
  deleteMovie,
} from "./services/fakeMovieService";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const IDs = [];
const titles = [];
const genres = [];
const stock = [];
const ratings = [];

const moviesList = getMovies();
for (let m of moviesList) {
  IDs.push(m._id);
  titles.push(m.title);
  genres.push(m.genre);
  stock.push(m.stock);
  ratings.push(m.ratings);
}

const titleItems = titles.map((title) => `<td>${title}</td>`);
console.log(titleItems);

/* const colors = ['red', 'green', 'blue'];


//const items = colors.map(color => '<li>' + color + '</li>');
// Or using template literals
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);
 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
