const hostels = [
    {
        name: "OXFORD HOSTEL",
        images: ["IMAGES/oxford.jpg", "hostelA2.jpg", "hostelA3.jpg"],
        price: "ksh13000",
        vacancy: "Available 12"
    },
   
     {
        name: "OAK VILL",
        images: ["oxford.jpg", "hostelB2.jpg", "hostelB3.jpg"],
        price: "KSH25000",
        vacancy: "Full"
    },
     {
        name: "JERSEY",
        images: ["IMAGES/JESERY.jpg", "hostelB2.jpg", "hostelB3.jpg"],
        price: "KSH13000",
        vacancy: "Full"
    },
     {
        name: "VATICAN",
        images: ["oxford.jpg", "hostelB2.jpg", "hostelB3.jpg"],
        price: "KSH15000",
        vacancy: "Full"
    },
     {
        name: "MYTLE",
        images: ["IMAGES/MYTEL.jpg", "IMAGES/B MYTEL.jpg", "IMAGES/A MYTEL.jpg"],
        price: "KSH20000",
        vacancy: "Full"
    },
     {
        name: "BETHEL",
        images: ["oxford.jpg", "hostelB2.jpg", "hostelB3.jpg"],
        price: "KSH14000",
        vacancy: "Full"
    },
    // Add more hostel objects here (up to 5000)
];

function displayHostels() {
    const container = document.getElementById("hostelContainer");
    container.innerHTML = '';
    
    hostels.forEach(hostel => {
        const card = document.createElement("div");
        card.className = "hostel-card";
        
        card.innerHTML = `
            <h3>${hostel.name}</h3>
            <div>
                <img src="${hostel.images[0]}" alt="${hostel.name}">
                <img src="${hostel.images[1]}" alt="${hostel.name}">
                <img src="${hostel.images[2]}" alt="${hostel.name}">
            </div>
            <div class="hostel-info">
                <p class="price">${hostel.price}</p>
                <p class="vacancy">${hostel.vacancy}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function filterHostels() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredHostels = hostels.filter(hostel => 
        hostel.name.toLowerCase().includes(query)
    );

    const container = document.getElementById("hostelContainer");
    container.innerHTML = '';
    
    filteredHostels.forEach(hostel => {
        const card = document.createElement("div");
        card.className = "hostel-card";
        
        card.innerHTML = `
            <h3>${hostel.name}</h3>
            <div>
                <img src="${hostel.images[0]}" alt="${hostel.name}">
                <img src="${hostel.images[1]}" alt="${hostel.name}">
                <img src="${hostel.images[2]}" alt="${hostel.name}">
            </div>
            <div class="hostel-info">
                <p class="price">${hostel.price}</p>
                <p class="vacancy">${hostel.vacancy}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", displayHostels);

function openModal(hostelName) {
    document.getElementById("hostelName").value = hostelName;
    document.getElementById("bookingModal").style.display = "block";
}

function closeModal() {
    document.getElementById("bookingModal").style.display = "none";
}

function processBooking(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const hostelName = document.getElementById("hostelName").value;
    const dates = document.getElementById("dates").value;

    // Here you would typically send this data to your server for processing.
    console.log(`Booking Details: ${name}, ${email}, ${hostelName}, ${dates}`);

    // Close the modal after processing
    closeModal();
}

// Update displayHostels function to include a "Book Now" button
function displayHostels() {
    const container = document.getElementById("hostelContainer");
    container.innerHTML = '';
    
    hostels.forEach(hostel => {
        const card = document.createElement("div");
        card.className = "hostel-card";
        
        card.innerHTML = `
            <h3>${hostel.name}</h3>
            <div>
                <img src="${hostel.images[0]}" alt="${hostel.name}">
                <img src="${hostel.images[1]}" alt="${hostel.name}">
                <img src="${hostel.images[2]}" alt="${hostel.name}">
            </div>
            <div class="hostel-info">
                <p class="price">${hostel.price}</p>
                <p class="vacancy">${hostel.vacancy}</p>
                <button onclick="openModal('${hostel.name}')">Book Now</button>
            </div>
        `;
        
        container.appendChild(card);
    });
}
