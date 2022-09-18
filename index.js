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
var txtInput = document.querySelector("#txt-input")
var output = document.querySelector(".output")

function clickEventHandler() {
    console.log("Clicked!!")
    console.log(txtInput.value)
    translate(txtInput.value)
}

btnTranslate.addEventListener("click", clickEventHandler)

function translate(inputText) {
    fetch(`https://api.funtranslations.com/translate/minion.json?text=${inputText}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (json) {
            console.log(json.contents.translated)
            output.innerHTML = json.contents.translated
        })
}




// Soham taught code

// const inputElement = document.querySelector('.input');
// const translateBtn = document.querySelector('.translate-btn');
// const translatedElement = document.querySelector('.translated');

// function fetchDetails(text) {
//     // Step 1 -> fetch response from minion translator api by passing my text
//     fetch(`https://api.funtranslations.com/translate/valyrian.json?text=${text}`)
//         // Step 2 -> convert into json
//         .then(function (response) {
//             return response.json()
//         })
//         // Step 3 -> use response to do some task
//         .then(function (json) {
//             console.log(json.contents.translated)
//             translatedElement.innerHTML = `<p>${json.contents.translated}</p>`
//         })
// }


// // button -> input element ka text -> fetch Details -> translated

// translateBtn.addEventListener('click', function () {
//     fetchDetails(inputElement.value)
// })
