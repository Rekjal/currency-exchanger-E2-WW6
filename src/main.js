import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange.js';

const roundToTwo = num => num.toFixed(2);

const getResult = (response, inputAmount, from, to) => {
  if (response.conversion_rates) {
    console.log(`response:inputAmount:from:to::::${response}:${inputAmount}:${from}:${to}`);
    const baseRate = response.conversion_rates[from];
    const targetRate = response.conversion_rates[to];
    $('.hidden').show();
    if (from === to) {
      $('.showResult').html(`<span class='orangeRedColorLW'>The two chosen currencies are same (<span class='orangeRedWeight'>${from}</span>). Try a different combination</span>`);
    }
    else if (from === "FED" || to === "FED") { //this is meaningless
      $('.showResult').html(`<span class='orangeRedColorLW'>This non-existant currency (<span class='orangeRedWeight'>FED</span>) is NOT supported`);
    }
    else {
      const convertedValue = roundToTwo((inputAmount / baseRate) * targetRate);
      $('.showResult').html(`<span class='blueColor'>${inputAmount}</span> <span class='greyColor'>${from}</span> = <span class='blueColor'>${convertedValue}</span> <span class='greyColor'>${to}</span>`);
    }
  }
  else {
    $('.hidden').show();
    $('.showError').html(`Unexpected Error: <span class='redColor'>${response.message}</span>`);
  }
};

$(document).ready(function () {
  ExchangeService.getCurrentRate()
    .then(function (response) {
      let stringVersion = JSON.stringify(response);
      let dataObject = JSON.parse(stringVersion);//parse creates an object (key is without quotes)

      $("form#currencyForm").submit(function (event) {
        $('.hidden').hide();
        event.preventDefault();
        const inputtedAmount = $("#amount").val();
        const inputtedFrom = $("#from").val();
        const inputtedTo = $("#to").val();
        getResult(dataObject, inputtedAmount, inputtedFrom, inputtedTo);
      });
    });
});
