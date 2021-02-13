import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange.js';

const roundToTwo = num => num.toFixed(2);

const getResult = (response, inputAmount, inputBase, inputTarget) => {
  if (response.conversion_rates) {
    console.log(`response:inputAmount:inputBase:inputTarget::::${response}:${inputAmount}:${inputBase}:${inputTarget}`);
    const baseRate = response.conversion_rates[inputBase];
    const targetRate = response.conversion_rates[inputTarget];
    const convertedValue = roundToTwo((inputAmount/baseRate)*targetRate);
    console.log(`${inputAmount}&nbsp${inputBase} = ${convertedValue}`);
    $('.showResult').html(`<span class='blueColor'>${inputAmount}</span> <span class='greyColor'>${inputBase}</span> = <span class='blueColor'>${convertedValue}</span> <span class='greyColor'>${inputTarget}</span>`);
  } else {
    $('.showError').html(`Unexpected Error: <span class='redColor'>${response.message}</span>`);
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
        getResult(dataObject, inputtedAmount, inputtedBase, inputtedTarget);
      });
    });
});
