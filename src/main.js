import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './js/exchange.js';


$(document).ready(function() {
  $('#triangle-checker-form').submit(function(event) {
    event.preventDefault();
    const rectangle = new Exchange(1,2);
    console.log(rectangle);
  });

  $('#rectangle-area-form').submit(function(event) {
    event.preventDefault();

  });

});