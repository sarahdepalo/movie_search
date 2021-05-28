'use strict';

document.addEventListener('DOMContentLoaded', function () {

    const searchButton = document.querySelector('#searchButton');
    const resultsContainer = document.querySelector('#resultsContainer');

    function fetchMovie() {
        const movieInput = document.querySelector('input').value;

        fetch(`
        https://api.themoviedb.org/3/search/movie?api_key=fb0616ec6d183f5abdf3e3af2060f25f&query=${encodeURI(movieInput)}`).then(function (response) {
            return response.json();
        }).then(function(data) {
            console.log("Data is: ", data);
            fetchDetails(data);
        }) 
    }

    function fetchDetails(data){
        //updates url to the details page of that movie:
        fetch(`https://api.themoviedb.org/3/movie/${data.results[0].id}?api_key=fb0616ec6d183f5abdf3e3af2060f25f`).then(function (response) {
            return response.json();
            
        }).then(function (data) {
            updateResult(data);
        })
        
    }

    function updateResult(data) {
        // Correctly gets data based on the id fetched above, but still need to figure out a way to print multiple sections
        resultsContainer.innerText = `${data.overview} Title is: ${data.original_title}`;
        
    }


    searchButton.addEventListener('click', function() {
        const userInput = movieInput.value;
        console.log(userInput);
        fetchMovie();


    })

})
