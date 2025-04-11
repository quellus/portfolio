const modalTitle = document.getElementById("modal-title")
const modalCarousel = document.getElementById("modal-carousel")
const modalDescription = document.getElementById("modal-description")
const modalCarouselIndicators = document.getElementById("modal-carousel-indicators")
const modal = new bootstrap.Modal("#daycart-modal", {keyboard: false})
var contentDict = {};

fetchContent()

function fetchContent() {
    fetch('content.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            contentDict[item["id"]] = item
        })
    })
    .catch (error => {
        console.error("Error fetching content:", error);
    })
}


function generateModal(id) {
    let content = contentDict[id] 
    modalTitle.innerHTML = content["title"]
    modalCarousel.innerHTML = ""
    content["images"].forEach((imagePath, index) => {
        if (index === 0) {
            modalCarousel.innerHTML += `<div class="carousel-item active"><img src="${imagePath}" class="d-block w-100" alt="..."></div>`
        }
        else {
            modalCarousel.innerHTML += `<div class="carousel-item"><img src="${imagePath}" class="d-block w-100" alt="..."></div>`
        }
    });
    modalCarouselIndicators.innerHTML = ""
    for (let i = 0; i < content["images"].length; i++) {
        if (i === 0) {
            modalCarouselIndicators.innerHTML += `<button type="button" data-bs-target="#modalCarouselIndicator" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`
        } else {
            modalCarouselIndicators.innerHTML += `<button type="button" data-bs-target="#modalCarouselIndicator" data-bs-slide-to="${i}" aria-label="Slide ${i + 1}"></button>`
        }
    }
    modalDescription.innerHTML = ""
    let modalDescriptionHtml = ""
    for (let i = 0; i < content["description"].length; i++) {
        modalDescriptionHtml += `<li class="list-group-item">${content["description"][i]}</li>`
    }
    modalDescriptionHtml += `<li class="list-group-item"><div id="modal-links" class="row justify-content-center">`
    for (let i = 0; i < content["links"].length; i++) {
        modalDescriptionHtml += `<div class="col-2"><a title="${content["links"][i]["tooltip"]}" href="${content["links"][i]["link"]}" target="_blank"><i class="fab ${content["links"][i]["icon"]} fa-inverse fa-2x"></i></a></div>`
    }
    modalDescriptionHtml += `</div></li>`
    modalDescription.innerHTML += modalDescriptionHtml
    modal.show()
}
