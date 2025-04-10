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
                <div class="card">
                    <div class="card-header">
                        <h3>${item["title"]}</h3>
                    </div>
                    <div class="card-body">
                        <p>${item["short_description"]}</p>
                        <a type="button" onclick="generateModal('${[item["id"]]}')">
                            <img src="${[item["images"][0]]}" class="img-fluid"></img>
                        </a>
                    </div>
                </div>
            </div>
            `
            cardContainer.innerHTML += card
        })
    })
}