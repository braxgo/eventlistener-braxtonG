/**
 * Events aplenty.
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 */

const container = document.querySelector(".container");
const button = document.querySelector(".button");

// Log when the button is clicked in the console.
button.addEventListener("click", function(){ alert("You found me!"); });
