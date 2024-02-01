const celebritiesContainer = document.getElementById('celebrities');
const actorElements = document.querySelectorAll('#celebrities .container');

actorElements.forEach(actorElement => {
    const name = actorElement.querySelector('h1').textContent;
    const description = actorElement.querySelector('p').textContent;
    const poster = actorElement.querySelector('img').getAttribute('src');
    const aboutLink = actorElement.querySelector('a').getAttribute('href');

    const actorCard = document.createElement('div');
    actorCard.classList.add('text-black', 'm-3', 'card', 'col-md-4');
    actorCard.innerHTML = `
        <img src='${poster}' alt='${name}' class='card-img-top' style="height:250px">
        <div class='card-body'>
            <h5 class='card-title'>${name}</h5>
            <p class='card-text'>${description}</p>
            <a href='${aboutLink}' class='btn btn-primary'>Learn More</a>
        </div> 
    `;

    actorCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.16),0 7px 9px rgba(0, 0, 0, 0.23)';
    actorCard.style.display = 'flex';
    actorCard.style.flexWrap = 'wrap';
    actorCard.style.flexBasis = '25%';
    actorCard.style.gap = '10px';
    actorCard.style.borderRadius = '1rem';
    celebritiesContainer.appendChild(actorCard);
});

// Remove the existing actor elements from HTML
actorElements.forEach(actorElement => {
    actorElement.remove();
});

const apiKey = '896ecd8c'; 

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const moviesContainer = document.getElementById('home');
    
    searchButton.addEventListener('click', handleSearchButtonClick);
    moviesContainer.addEventListener('click', handleContainerClick); // Add this line

    function handleSearchButtonClick() {
        const searchInput = document.getElementById('searchInput');
        let searchQuery = searchInput.value.trim();
        searchQuery = searchQuery.replace(/([a-z])([A-Z0-9])/g, '$1 $2');

        if (searchQuery !== '') {
            const searchResultsContainer = document.getElementById('searchResults');
            searchResultsContainer.innerHTML = ``;

            fetchMovieData(searchQuery, searchResultsContainer);
        }
    }

    
    function fetchMovieData(query, container) {
        const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(query)}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayMovieData(data, container))
            .catch(error => console.error('Error fetching movie data:', error));
    }

    function displayMovieData(data, container) {
        if (data.Error) {
            console.error('OMDB API Error:', data.Error);
            return;
        }
        
        const newPage = window.open('', '_parent');
    
        newPage.document.body.innerHTML = `
        <div class="text-black m-3 card col-md col-lg">
            <img src="${data.Poster}" alt="${data.Title}" class="card-img-top" style="height:700px;width:100%">
            <div class="card-body">
                <h3 class="card-title">${data.Title}</h3>
                <ul style="list-style-type: none;">
                <li class="data-plot">${data.Plot}</li>
                <li class="data-actors"><b>Actors:</b>${data.Actors}</li>
                <li class="data-language"><b>Language:</b>${data.Language}</li>
                <li class="data-released"><b>Released:</b>${data.Released}</li>
                </ul>
                <a href="https://www.imdb.com/title/${data.imdbID}" class="btn btn-primary" target="_blank" data-imdb-id="${data.imdbID}">More</a>
            </div>
        </div>
    `;
    
    }
});
