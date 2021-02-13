import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange.js';

function getElements(response, inputAmount, inputBase, inputTarget) {
  if (response.conversion_rates) {
    const baseRate = response.converion_rates[inputBase];
    const targetRate = response.converion_rates[inputTarget];
    $('.showResult').text(`${inputAmount}&nbsp${inputBase} = ${((inputAmount / baseRate) * targetRate)}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function () {
  $('#weatherLocation').click(function (event) {
    event.preventDefault();
    const inputAmount = $("#amount").val();
    const inputBaseCurrency = $("#baseCurrency").val();
    const inputTargetCurrency = $("#targetCurrency").val();



    ExchangeService.getCurrentRate()
      .then(function (response) {
        let stringifiedResponse = JSON.stringify(response);
        getElements(stringifiedResponse, inputAmount, inputBaseCurrency, inputTargetCurrency);
      });
  });
});
