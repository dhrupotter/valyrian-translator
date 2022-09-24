// https://api.funtranslations.com/translate/minion.json

// query params -> ones that are followed by ?
// path params -> in the url path itself

// store-input data -> text
// on button click -> trigger a function called fetchDetails
// fetchDetails -> takes the text -> gives it to an API -> returns translated text
// show on UI

// Functions
// Declaration : function fnName(){}
// Call: fnName(params)

//Declaration types
// named: function fnName(){}
// anonymous: function (){}

// Asynchronous:

// Step 0 -> call fetchDetails function on button click

var btnTranslate = document.querySelector(".btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector(".output");

function clickEventHandler() {
  translate(txtInput.value);
}

btnTranslate.addEventListener("click", clickEventHandler);

function translate(inputText) {
  fetch(
    `https://api.funtranslations.com/translate/valyrian.json?text=${inputText}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      output.innerHTML = json.contents.translated;
    });
}
