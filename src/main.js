import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange.js';

const roundToTwo = num => num.toFixed(2);

function getResult(response, inputAmount, inputBase, inputTarget) {
  if (response.conversion_rates) {
    console.log(`response:inputAmount:inputBase:inputTarget::::${response}:${inputAmount}:${inputBase}:${inputTarget}`);
    const baseRate = response.conversion_rates[inputBase];
    const targetRate = response.conversion_rates[inputTarget];
    const convertedValue = roundToTwo((inputAmount/baseRate)*targetRate);
    console.log(`${inputAmount}&nbsp${inputBase} = ${convertedValue}`);
    $('.showResult').text(`${inputAmount} ${inputBase} = ${convertedValue}`);
  } else {
    $('.showError').text(`Unexpected Error: ${response.message}`);
  }
}

$(document).ready(function () {
  ExchangeService.getCurrentRate()
    .then(function (response) {
      let stringVersion = JSON.stringify(response);
      let dataObject = JSON.parse(stringVersion);//parse creates an object (key is without quotes)

      $("form#currencyForm").submit(function (event) {
        event.preventDefault();
        const inputtedAmount = $("#amount").val();
        const inputtedBase = $("#from").val();
        const inputtedTarget = $("#to").val();
        // console.log("I am here");
        // console.log(`${JSON.stringify(response)}`);
        getResult(dataObject, inputtedAmount, inputtedBase, inputtedTarget);
      });
    });
});
