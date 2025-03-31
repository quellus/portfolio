const modalTitle = document.getElementById("modal-title")
const modalCarousel = document.getElementById("modal-carousel")
const modalDescription = document.getElementById("modal-description")
const modal = new bootstrap.Modal("#daycart-modal", {keyboard: false})

function generateModal(id) {
    fetch('content.json')
    .then(response => response.json())
    .then(data => {
        let content = data[id] 
        modalTitle.innerHTML = content.title
        modalCarousel.innerHTML = ""
        content["images"].forEach((imagePath, index) => {
            if (index === 0) {
                modalCarousel.innerHTML += `<div class="carousel-item active"><img src="${imagePath}" class="d-block w-100" alt="..."></div>`
            }
            else {
                modalCarousel.innerHTML += `<div class="carousel-item"><img src="${imagePath}" class="d-block w-100" alt="..."></div>`
            }
        });
        modalDescription.innerHTML = ""
        content["description"].forEach((description) => {
            modalDescription.innerHTML += `<li class="list-group-item">${description}</li>`
        })
        modalDescription.innerHTML += `<li class="list-group-item"><div id="modal-links" class="row justify-content-center">`
        content["links"].forEach((linkInfo) => {
            modalDescription.innerHTML += `<a title="${linkInfo["tooltip"]}" href="${linkInfo["link"]}" target="_blank"><i class="fab ${linkInfo["icon"]} fa-inverse fa-2x"></i></a>`
        })
        modalDescription.innerHTML += `</div></li>`
        modal.show()
    })
}
