import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange.js';

function getResult(response, inputAmount, inputBase, inputTarget) {
  console.log("ia m here");
  if (response.conversion_rates) {
    console.log(`response:inputAmount:inputBase:inputTarget::::${response}:${inputAmount}:${inputBase}:${inputTarget}`);
    const baseRate = response.conversion_rates[inputBase];
    const targetRate = response.conversion_rates[inputTarget];
    console.log(`${inputAmount}&nbsp${inputBase} = ${((inputAmount / baseRate) * targetRate)}`);
    $('.showResult').text(`${inputAmount}&nbsp${inputBase} = ${((inputAmount / baseRate) * targetRate)}`);
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
