const listings = [
    { id: 1, title: 'Mountain Bike', price: 1500, location: 'Kisumu', image: 'bike.jpg' },
    { id: 2, title: 'Unisex Sneakers', price: 400, location: 'Kakamega', image: 'sneakers.jpg' },
    { id: 3, title: 'Subaru Car', price: 80000, location: 'Kakamega', image: 'IMAGES/bb.jpg' }
];

function displayListings() {
    let container = document.getElementById("listings-container");
    container.innerHTML = ''; // Clear previous content
    listings.forEach(item => {
        let listingHTML = `<div class="listing">
                               <img src="${item.image}" alt="${item.title}">
                               <h3>${item.title}</h3>
                               <p>KES ${item.price}</p>
                               <p>${item.location}</p>
                           </div>`;
        container.innerHTML += listingHTML;
    });
}

document.addEventListener("DOMContentLoaded", displayListings);
image: 'https://via.placeholder.com/200'  // Placeholder image
