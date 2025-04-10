const cardContainer = document.getElementById("card-container")

function generateCards() {
    fetch('content.json')
    .then(response => response.json())
    .then(data => {
        Object.keys(data).forEach(key => {
            
        })
    })
}