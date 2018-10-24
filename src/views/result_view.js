const PubSub = require("../helpers/pub_sub.js");

const ResultView = function (container) {
  this.container = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe("Country:selected-country", (event) => {
    const country = event.detail;
    this.display(country);
    //console.log(country);
  });
};

ResultView.prototype.display = function (country) {
  this.container.innerHTML = "";

  const header = document.createElement("h1");
  header.textContent = country.name;
  this.container.appendChild(header);

  const flag = document.createElement("IMG");
  flag.setAttribute("src", country.flag);
  flag.setAttribute("width", "400");
  flag.setAttribute("height", "225");
  this.container.appendChild(flag);

  const regionTitle = document.createElement("h2");
  regionTitle.textContent = "Region:";
  this.container.appendChild(regionTitle);

  const region = document.createElement("p");
  region.textContent = country.region;
  this.container.appendChild(region);

  const languageTitle = document.createElement("h2");
  languageTitle.textContent = "Languages:";
  this.container.appendChild(languageTitle);

  const list = document.createElement("ul");
  country.languages.forEach((item) => {
    const language = document.createElement("li");
    language.textContent = item.name;
    list.appendChild(language);
  });
  this.container.appendChild(list);

};

module.exports = ResultView;
