/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "it's a"];
  let adj = ["great", "big", "stupid", "bad"];
  let noun = ["404", "domain", "website", "idea"];
  // añadir un if termina en es, se escribe .es / else añadir .com
  let domains = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[k]);
        const domain = pronoun[i] + adj[j] + noun[k] + ".com";
        document.getElementById("domain").innerHTML = domain;
        domains.push(domain);
      }
    }
  }
  console.log(domains);
};
