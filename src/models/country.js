const PubSub = require("../helpers/pub_sub.js");
const RequestHelper = require("../helpers/request_helper.js");

const Country = function () {
  this.countries = null;
};

Country.prototype.getData = function () {
  const request = new RequestHelper("https://restcountries.eu/rest/v2/all");
  request.get((countryData) => {
    this.countries = countryData;
    PubSub.publish("Country:countries-loaded", this.countries);
  });
};

Country.prototype.bindEvents = function () {
  PubSub.subscribe("SelectView:change", (event) => {
    const selectedIndex = event.detail;
    this.publishCountryInfo(selectedIndex);
  });
};

Country.prototype.publishCountryInfo = function (index) {
  const selectedCountry = this.countries[index];
  //console.log(selectedCountry);
  PubSub.publish("Country:selected-country", selectedCountry);
};


module.exports = Country;
