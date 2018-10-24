const PubSub = require("../helpers/pub_sub.js");

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe("Country:countries-loaded", (event) => {
    const allCountries = event.detail;
    // console.log("@@@@@@",allCountries);
    this.populate(allCountries);
  });

  this.element.addEventListener("change", (event) => {
    const index = event.target.value;
    PubSub.publish("SelectView:change", index);
  });
};

SelectView.prototype.populate = function (countriesData) {
  countriesData.forEach((country, index) => {
    const option = document.createElement("option");
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
