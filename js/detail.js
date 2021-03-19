const detailContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://api.rawg.io/api/games/" + id;

console.log(url);

async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
      
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
    
}

fetchGame();

function createHtml(details) {
    detailContainer.innerHTML = `<h1>${details.name}</h1>
                                <div class="details-image" style="background-image: url('${details.background_image}')"></div>
                                <p class="details-date">Genre: ${details.genres[0].name}</p>
                                <a class="details-date" href="${details.website}">${details.website}</a>
                                <p class="details-date">Developers: ${details.developers[0].name}</p>
                                <p class="details-date">Publisher: ${details.publishers[0].name}</p>
                                <button onclick="location.href='cart.html'" type="button">Add To Cart</button>
                                <h2>Preview image</h2>
                                <div class="screenshot-image" style="background-image: url('${details.background_image_additional}')"></div>
                                <h2>Preview video</h2>
                                <iframe src="${details.clip.clip}"></iframe>`;
                                
}

console.log (details.released)