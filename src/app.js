const Country = require("./models/country.js");
const SelectView = require("./views/select_view.js");
const ResultView = require("./views/result_view.js");


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const country = new Country();
  country.getData();

  const selectDropdown = document.querySelector("select#countries");
  const selectView = new SelectView(selectDropdown);
  selectView.bindEvents();

  // const countryData = new Country();
  // countryData.bindEvents();




});
