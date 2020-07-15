$(document).ready(function() {
  // set endpoint and your access key
  endpoint = 'convert';
  access_key = 'CURRENCYLAYER_API_KEY';

  // define from currency, to currency, and amount
  from = input.baseCurrency
  to = input.targetCurrency
  amount = input.amount

  // execute the conversion using the "convert" endpoint:
  $.ajax({
      url: 'https://apilayer.net/api/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,
      dataType: 'jsonp',
      success: function(json) {

          // access the conversion result in json.result
          alert(json.result)

      }
  })
})
