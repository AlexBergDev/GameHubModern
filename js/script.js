const resultsContainer = document.querySelector(".results");

const url = "https://api.rawg.io/api/games?key=33e9ae782f654c8fbfcdb318d08ba4c0";

async function fetchGames() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        resultsContainer.innerHTML = "";

        const games = json.results;

        games.forEach(function(game) {
            resultsContainer.innerHTML += `<a href="game.html?id=${game.id}" class="card">
                                                
                                                <div class="details">
                                                <div class="image" style="background-image: url(${game.background_image});"></div>
                                                    <h2 class="name">${game.name}</h2>                                                                                                                                                     
                                                </div>
                                            </a>`;
        });
      
    }
    catch(error) {
        resultsContainer.innerHTML = message("error", error);
    }
    
}

fetchGames();
