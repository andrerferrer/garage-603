// The entry file should have only

// //////////
// imports //
// //////////
import { getAPI } from "./components/get_api";
import { postAPI } from "./components/post_api";

// //////////
// function calls
// //////////

// fetch all cars from the garage when the page loads
getAPI();

// //////////
// event listeners
// //////////

// to create a new car in the garage
// the user will add the input and will submit
const form = document.getElementById('new-car');

// when the user submits
form.addEventListener('submit', postAPI);
