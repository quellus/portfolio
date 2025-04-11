const cardContainer = document.getElementById("card-container")

generateCards()

function generateCards() {
    fetch('content.json')
    .then(response => response.json())
    .then(data => {
        cardContainer.innerHTML = ""
        data.forEach(item => {
            let card = `
            <div class="col-md-6 col-lg-4 mb-5">
                <a type="button" onclick="generateModal('${[item["id"]]}')">
                    <div class="card hover-card">
                        <div class="card-header">
                            <h3>${item["title"]}</h3>
                        </div>
                        <div class="card-body">
                            <p>${item["short_description"]}</p>
                            <img src="${[item["images"][0]]}" class="card-img-bottom"></img>
                        </div>
                    </div>
                </a>
            </div>
            `
            cardContainer.innerHTML += card
        })
    })
}
