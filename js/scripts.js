'use strict';

document.addEventListener('DOMContentLoaded', function () {

    const searchButton = document.querySelector('#searchButton');
    const movieInput = document.querySelector('#movieInput');
  

    searchButton.addEventListener('click', function() {
        const userInput = movieInput.value;
        console.log(userInput);

    })

})
