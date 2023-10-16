/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let who = ["Voldemort", "Godzilla", "The queen", "Gollum"];
  let actions = ["stole", "destroyed", "burned", "run away with"];
  let possetion = ["my phone", "my wallet", "my bag", "my keys"];
  let where = [
    "at the supermarket",
    "on the beach",
    "on the street",
    "at my home"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionsIndex = Math.floor(Math.random() * actions.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    who[whoIndex] +
    " " +
    actions[actionsIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
