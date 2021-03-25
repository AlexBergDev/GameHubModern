const detailContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


const url = "https://api.rawg.io/api/games/" + id + "?key=33e9ae782f654c8fbfcdb318d08ba4c0";

async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();


        createHtml(details);
      
    }
    catch(error) {
        detailContainer.innerHTML = message("error", error);
    }
    
}

fetchGame();

function createHtml(details) {
    detailContainer.innerHTML = `<h1 class="product-title">${details.name}</h1>
                                <div class="details-image" style="background-image: url('${details.background_image}')"></div>
                                <div class="product-grid">
                                <p class="text-product">Genre: ${details.genres[0].name}</p>
                                <p class="text-product">Developers: ${details.developers[0].name}</p>
                                <p class="text-product">Publisher: ${details.publishers[0].name}</p>
                                <p class="text-product price">kr 699,00</p>
                                <button onclick="location.href='cart.html'" type="button">Add To Cart</button>
                                </div>
                                <h2>Preview image</h2>
                                <div class="screenshot-image" style="background-image: url('${details.background_image_additional}')"></div>
                                <h2>Preview video</h2>
                                <iframe src="${details.clip.clip}"></iframe>`;
                                
}
