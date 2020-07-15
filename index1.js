$(document).ready(function() {

  // https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json

  // get list of world currencies
  let dropdown = $('#locality-dropdown')

  dropdown.empty()

  dropdown.append('<option selected="true" disabled>Choose State/Province</option>');
  dropdown.prop('selectedIndex', 0)

  // const dropdownUrl = 'https://openexchangerates.org/api/currencies.json'

  // const dropdownUrl = 'https://api.myjson.com/bins/13ga9t'

  const dropdownUrl = 'https://api.myjson.com/bins/7xq2x'

  // Populate dropdown with list of currencies
  $.getJSON(dropdownUrl, function (data) {
    $.each(data, function (key, entry) {
      dropdown.append($('<option></option>').attr('value', entry.abbreviation).text(entry.name))
    })
  })

  // $.get('https://openexchangerates.org/api/currencies.json', function(data) {
  //   console.log("Did you know? One unit of VND is known as a '" + data.VND + "'");
  // });

  // set endpoint and your API key
  endpoint = 'convert'
  access_key = 'FIXER_API_KEY'

  // define from currency, to currency, and amount
  from = 'EUR'
  to = 'GBP'
  amount = '10'

  // execute the conversion using the "convert" endpoint:
  $.ajax({
      url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,
      dataType: 'jsonp',
      success: function(json) {

          // access the conversion result in json.result
          alert(json.result)

      }
  })
})


// document.addEventListener('DOMContentLoaded', () => {
//
//     document.querySelector('#form').onsubmit = () => {
//
//         // Initialize new request
//         const request = new XMLHttpRequest();
//         const currency = document.querySelector('#currency').value;
//         request.open('POST', '/convert');
//
//         // Callback function for when request completes
//         request.onload = () => {
//
//             // Extract JSON data from request
//             const data = JSON.parse(request.responseText);
//
//             // Update the result div
//             if (data.success) {
//                 const contents = `1 USD is equal to ${data.rate} ${currency}.`
//                 document.querySelector('#result').innerHTML = contents;
//             }
//             else {
//                 document.querySelector('#result').innerHTML = 'There was an error.';
//             }
//         }
//
//         // Add data to send with request
//         const data = new FormData();
//         data.append('currency', currency);
//
//         // Send request
//         request.send(data);
//         // ensure that page does not reload, wiping out data
//         return false;
//     };
//
// });
