// JavaScript for search filtering and live stream controls

document.addEventListener('DOMContentLoaded', () => {
    // Sample data for hostels and marketplace listings
    const hostels = [
        { name: 'Green House Hostel', price: '$150/month', available: '5 rooms' },
        { name: 'Blue House Hostel', price: '$200/month', available: '2 rooms' },
        { name: 'Red Brick Hostel', price: '$120/month', available: '7 rooms' }
    ];

    const marketplaceItems = [
        { name: 'Textbook - Algorithms', price: '$50' },
        { name: 'Laptop - Dell XPS 13', price: '$800' },
        { name: 'Tutoring - Computer Science', price: '$20/hour' }
    ];

    // Populating hostel listings
    const hostelListings = document.querySelector('.hostel-listings');
    hostels.forEach(hostel => {
        const hostelDiv = document.createElement('div');
        hostelDiv.innerHTML = `<h3>${hostel.name}</h3><p>Price: ${hostel.price}</p><p>Available: ${hostel.available}</p>`;
        hostelListings.appendChild(hostelDiv);
    });

    // Populating marketplace listings
    const marketListings = document.querySelector('.market-listings');
    marketplaceItems.forEach(item => {
        const marketDiv = document.createElement('div');
        marketDiv.innerHTML = `<h3>${item.name}</h3><p>Price: ${item.price}</p>`;
        marketListings.appendChild(marketDiv);
    });

    // Search filter for hostels
    document.getElementById('hostelSearch').addEventListener('input', function () {
        const searchValue = this.value.toLowerCase();
        const filteredHostels = hostels.filter(hostel => hostel.name.toLowerCase().includes(searchValue));
        hostelListings.innerHTML = '';
        filteredHostels.forEach(hostel => {
            const hostelDiv = document.createElement('div');
            hostelDiv.innerHTML = `<h3>${hostel.name}</h3><p>Price: ${hostel.price}</p><p>Available: ${hostel.available}</p>`;
            hostelListings.appendChild(hostelDiv);
        });
    });

    // Search filter for marketplace
    document.getElementById('marketSearch').addEventListener('input', function () {
        const searchValue = this.value.toLowerCase();
        const filteredItems = marketplaceItems.filter(item => item.name.toLowerCase().includes(searchValue));
        marketListings.innerHTML = '';
        filteredItems.forEach(item => {
            const marketDiv = document.createElement('div');
            marketDiv.innerHTML = `<h3>${item.name}</h3><p>Price: ${item.price}</p>`;
            marketListings.appendChild(marketDiv);
        });
    });

    // Live stream controls
    const goLiveButton = document.getElementById('goLiveButton');
    const liveStream = document.getElementById('liveStream');

    goLiveButton.addEventListener('click', () => {
        // Simulating live stream
        liveStream.src = 'sample-video.mp4'; // Replace with WebRTC stream or a real video
        liveStream.play();
    });
});
