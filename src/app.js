const Country = require("./models/country.js");
const SelectView = require("./views/select_view.js");
const ResultView = require("./views/result_view.js");


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const country = new Country();
  country.getData();
  country.bindEvents();

  const selectDropdown = document.querySelector("select#countries");
  const selectView = new SelectView(selectDropdown);
  selectView.bindEvents();

  const info = document.querySelector("div#country");
  const resultView = new ResultView(info);
  resultView.bindEvents();

});
