/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { left } from "@popperjs/core";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let who = ["Voldemort", "Godzilla", "The queen", "Gollum"];
  let verb = ["stole", "destroyed", "burned", "run away with"];
  let what = ["my phone", "my wallet", "my bag", "my keys"];
  let where = [
    "at the supermarket",
    "on the beach",
    "on the street",
    "at my home"
  ];

  function getRandomExcuses(array) {
    return Math.floor(Math.random() * array.length);
  }

  let whoIndex = getRandomExcuses(who);
  let verbIndex = getRandomExcuses(verb);
  let whatIndex = getRandomExcuses(what);
  let whereIndex = getRandomExcuses(where);

  return (
    who[whoIndex] +
    " " +
    verb[verbIndex] +
    " " +
    what[whatIndex] +
    " " +
    where[whereIndex]
  );
};
