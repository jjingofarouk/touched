
// gallery.js

// Lightbox Functionality
const lightboxLinks = document.querySelectorAll('.lightbox');
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-lightbox');

// Open lightbox when clicking on an image
lightboxLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default behavior of anchor tags
        const imageSrc = this.getAttribute('href'); // Get the image URL
        lightboxImage.src = imageSrc; // Set the image in the lightbox
        lightboxModal.classList.add('open'); // Show the modal
    });
});

// Close lightbox when clicking on the close button
closeBtn.addEventListener('click', function () {
    lightboxModal.classList.remove('open'); // Hide the modal
});

// Close lightbox when clicking outside the image
lightboxModal.addEventListener('click', function (e) {
    if (e.target === lightboxModal) {
        lightboxModal.classList.remove('open');
    }
});

// Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const imageCards = document.querySelectorAll('.image-card');

// Add event listener to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        const filterValue = this.getAttribute('data-filter'); // Get the filter category
        filterImages(filterValue); // Call the filterImages function
        highlightActiveButton(this); // Highlight the active filter button
    });
});

// Function to filter images based on category
function filterImages(category) {
    imageCards.forEach(card => {
        // Show or hide images based on the selected category
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to highlight the active filter button
function highlightActiveButton(activeButton) {
    filterButtons.forEach(button => {
        button.classList.remove('active'); // Remove active class from all buttons
    });
    activeButton.classList.add('active'); // Add active class to the clicked button
}

// Initialize with all images displayed
filterImages('all');
