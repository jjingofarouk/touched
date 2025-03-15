document.addEventListener("DOMContentLoaded", () => {
    const galleryGrid = document.getElementById("gallery-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const prevPageBtn = document.getElementById("prev-page");
    const nextPageBtn = document.getElementById("next-page");
    const pageNumberDisplay = document.getElementById("page-number");

    let imagesData = [];
    let currentFilter = "all";
    let currentPage = 1;
    const itemsPerPage = 12; // Number of images per page

    // Fetch gallery data from JSON
    fetch("./assets/data/gallery.json")
        .then(response => response.json())
        .then(data => {
            imagesData = data;
            displayImages();
        });

    // Function to display images based on filters and pagination
    function displayImages() {
        galleryGrid.innerHTML = "";

        let filteredImages = imagesData.filter(img => currentFilter === "all" || img.category === currentFilter);
        let totalPages = Math.ceil(filteredImages.length / itemsPerPage);

        let start = (currentPage - 1) * itemsPerPage;
        let paginatedImages = filteredImages.slice(start, start + itemsPerPage);

        paginatedImages.forEach(img => {
            const item = document.createElement("div");
            item.classList.add("gallery-item");
            item.dataset.category = img.category;

            item.innerHTML = `
                <a href="${img.src}" class="lightbox-link" data-caption="${img.caption}">
                    <img src="${img.src}" alt="${img.caption}" loading="lazy">
                    <div class="overlay">
                        <span class="overlay-text">${img.category}</span>
                    </div>
                </a>
            `;
            galleryGrid.appendChild(item);
        });

        pageNumberDisplay.textContent = `Page ${currentPage}`;
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;

        // Lightbox functionality
        document.querySelectorAll(".lightbox-link").forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                openLightbox(link.href, link.dataset.caption);
            });
        });
    }

    // Filter images
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".filter-btn.active").classList.remove("active");
            btn.classList.add("active");

            currentFilter = btn.dataset.filter;
            currentPage = 1;
            displayImages();
        });
    });

    // Pagination controls
    prevPageBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            displayImages();
        }
    });

    nextPageBtn.addEventListener("click", () => {
        currentPage++;
        displayImages();
    });

    // Lightbox functionality
    const lightbox = document.getElementById("lightbox-modal");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeBtn = document.getElementById("close-lightbox");

    function openLightbox(src, caption) {
        lightboxImage.src = src;
        lightboxCaption.textContent = caption;
        lightbox.classList.add("active");
    }

    closeBtn.addEventListener("click", () => lightbox.classList.remove("active"));
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) lightbox.classList.remove("active");
    });
});
