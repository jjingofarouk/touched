// blog.js - Script to handle blog post loading and display

document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    let allPosts = [];
    let currentPage = 1;
    let postsPerPage = 3;
    let filteredPosts = [];
    let activeCategory = null;
    let searchTerm = '';

    // Fetch blog posts from JSON file
    async function fetchBlogPosts() {
        try {
            const response = await fetch('./assets/blog-posts.json');
            if (!response.ok) {
                throw new Error('Failed to fetch blog posts');
            }
            const data = await response.json();
            allPosts = data.posts;
            filteredPosts = [...allPosts];
            postsPerPage = data.pagination.postsPerPage;

            // Initialize the page
            displayCategories(data.categories);
            displayPosts();
            setupSearch();
            hideLoading();
        } catch (error) {
            console.error('Error loading blog posts:', error);
            document.getElementById('loading-indicator').innerHTML = 
                '<p>Error loading content. Please try again later.</p>';
        }
    }

    // Display blog posts
    function displayPosts() {
        const blogGrid = document.getElementById('blog-grid');
        blogGrid.innerHTML = '';
        
        // Get current posts for this page
        const startIndex = (currentPage - 1) * postsPerPage;
        const postsToShow = filteredPosts.slice(startIndex, startIndex + postsPerPage);
        
        if (postsToShow.length === 0) {
            blogGrid.innerHTML = '<div class="no-results"><p>No posts match your criteria.</p></div>';
            hidePagination();
            return;
        }

        // Get the template
        const template = document.getElementById('blog-post-template');
        
        // Create blog post elements
        postsToShow.forEach(post => {
            // Clone the template
            const postElement = document.importNode(template.content, true);
            
            // Set content
            postElement.querySelector('.post-image').src = post.image;
            postElement.querySelector('.post-image').alt = post.title;
            
            const titleLink = postElement.querySelector('.post-title');
            titleLink.textContent = post.title;
            titleLink.href = `blog-detail.html?id=${post.id}`;
            
            postElement.querySelector('.excerpt').textContent = post.excerpt;
            postElement.querySelector('.full-content').innerHTML = post.content;
            postElement.querySelector('.full-content').style.display = 'none';
            
            postElement.querySelector('.post-meta').textContent = `Posted on ${post.date}`;
            postElement.querySelector('.category-tag').textContent = post.category;
            
            // Set up read more functionality
            const readMoreBtn = postElement.querySelector('.read-more-btn');
            readMoreBtn.addEventListener('click', function() {
                const content = this.parentNode.querySelector('.full-content');
                const excerpt = this.parentNode.querySelector('.excerpt');
                
                if (content.style.display === 'none') {
                    content.style.display = 'block';
                    excerpt.style.display = 'none';
                    this.textContent = 'Read Less';
                } else {
                    content.style.display = 'none';
                    excerpt.style.display = 'block';
                    this.textContent = 'Read More';
                }
            });
            
            // Add to the grid
            blogGrid.appendChild(postElement);
        });
        
        // Update pagination
        updatePagination();
    }

    // Display categories in the sidebar
    function displayCategories(categories) {
        const categoriesList = document.getElementById('categories-list');
        
        // Add "All" category
        const allItem = document.createElement('li');
        const allLink = document.createElement('a');
        allLink.href = '#';
        allLink.textContent = 'All Categories';
        allLink.classList.add('active-category');
        allLink.addEventListener('click', function(e) {
            e.preventDefault();
            filterByCategory(null);
            updateActiveCategoryLink(this);
        });
        allItem.appendChild(allLink);
        categoriesList.appendChild(allItem);
        
        // Add other categories
        categories.forEach(category => {
            const item = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = category;
            link.addEventListener('click', function(e) {
                e.preventDefault();
                filterByCategory(category);
                updateActiveCategoryLink(this);
            });
            item.appendChild(link);
            categoriesList.appendChild(item);
        });
    }

    // Update active category link
    function updateActiveCategoryLink(activeLink) {
        // Remove active class from all links
        document.querySelectorAll('#categories-list a').forEach(link => {
            link.classList.remove('active-category');
        });
        
        // Add active class to current link
        activeLink.classList.add('active-category');
    }

    // Filter posts by category
    function filterByCategory(category) {
        activeCategory = category;
        applyFilters();
    }

    // Set up search functionality
    function setupSearch() {
        const searchForm = document.getElementById('search-form');
        const searchInput = document.getElementById('search-input');
        
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            searchTerm = searchInput.value.trim().toLowerCase();
            applyFilters();
        });
        
        // Add real-time search (optional)
        searchInput.addEventListener('input', function() {
            searchTerm = this.value.trim().toLowerCase();
            applyFilters();
        });
    }

    // Apply filters (category and search)
    function applyFilters() {
        filteredPosts = allPosts.filter(post => {
            // Category filter
            const categoryMatch = !activeCategory || post.category === activeCategory;
            
            // Search filter
            const searchMatch = !searchTerm || 
                post.title.toLowerCase().includes(searchTerm) || 
                post.excerpt.toLowerCase().includes(searchTerm) || 
                post.content.toLowerCase().includes(searchTerm);
            
            return categoryMatch && searchMatch;
        });
        
        // Reset to first page and display
        currentPage = 1;
        displayPosts();
    }

    // Update pagination controls
    function updatePagination() {
        const paginationElement = document.getElementById('pagination');
        const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
        
        if (totalPages <= 1) {
            hidePagination();
            return;
        }
        
        // Show pagination
        paginationElement.style.display = 'flex';
        paginationElement.innerHTML = '';
        
        // Previous button
        const prevButton = document.createElement('a');
        prevButton.href = '#';
        prevButton.classList.add('pagination-item');
        prevButton.innerHTML = '&laquo; Previous';
        prevButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                displayPosts();
                scrollToTop();
            }
        });
        if (currentPage === 1) {
            prevButton.classList.add('disabled');
        }
        paginationElement.appendChild(prevButton);
        
        // Page numbers
        // Show only a limited number of page links
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        // Adjust start if we're at the end
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        // First page link if needed
        if (startPage > 1) {
            const firstPageLink = document.createElement('a');
            firstPageLink.href = '#';
            firstPageLink.classList.add('pagination-item');
            firstPageLink.textContent = '1';
            firstPageLink.addEventListener('click', function(e) {
                e.preventDefault();
                currentPage = 1;
                displayPosts();
                scrollToTop();
            });
            paginationElement.appendChild(firstPageLink);
            
            if (startPage > 2) {
                const ellipsis = document.createElement('span');
                ellipsis.classList.add('pagination-item', 'ellipsis');
                ellipsis.textContent = '...';
                paginationElement.appendChild(ellipsis);
            }
        }
        
        // Page numbers
        for (let i = startPage; i <= endPage; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.classList.add('pagination-item');
            pageLink.textContent = i;
            if (i === currentPage) {
                pageLink.classList.add('active');
            }
            pageLink.addEventListener('click', function(e) {
                e.preventDefault();
                currentPage = i;
                displayPosts();
                scrollToTop();
            });
            paginationElement.appendChild(pageLink);
        }
        
        // Last page link if needed
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                const ellipsis = document.createElement('span');
                ellipsis.classList.add('pagination-item', 'ellipsis');
                ellipsis.textContent = '...';
                paginationElement.appendChild(ellipsis);
            }
            
            const lastPageLink = document.createElement('a');
            lastPageLink.href = '#';
            lastPageLink.classList.add('pagination-item');
            lastPageLink.textContent = totalPages;
            lastPageLink.addEventListener('click', function(e) {
                e.preventDefault();
                currentPage = totalPages;
                displayPosts();
                scrollToTop();
            });
            paginationElement.appendChild(lastPageLink);
        }
        
        // Next button
        const nextButton = document.createElement('a');
        nextButton.href = '#';
        nextButton.classList.add('pagination-item');
        nextButton.innerHTML = 'Next &raquo;';
        nextButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                displayPosts();
                scrollToTop();
            }
        });
        if (currentPage === totalPages) {
            nextButton.classList.add('disabled');
        }
        paginationElement.appendChild(nextButton);
    }

    // Hide pagination
    function hidePagination() {
        document.getElementById('pagination').style.display = 'none';
    }

    // Hide loading indicator
    function hideLoading() {
        document.getElementById('loading-indicator').style.display = 'none';
    }

    // Scroll to top of the page
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Check for URL parameters (for filtering directly from URL)
    function checkUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        const searchParam = urlParams.get('search');
        
        if (categoryParam) {
            // Filter by category if specified in URL
            const categoryLinks = document.querySelectorAll('#categories-list a');
            categoryLinks.forEach(link => {
                if (link.textContent === categoryParam) {
                    activeCategory = categoryParam;
                    updateActiveCategoryLink(link);
                }
            });
        }
        
        if (searchParam) {
            // Apply search if specified in URL
            document.getElementById('search-input').value = searchParam;
            searchTerm = searchParam.toLowerCase();
        }
        
        // Apply any filters from URL
        if (categoryParam || searchParam) {
            applyFilters();
        }
    }

    // Initialize the blog page
    fetchBlogPosts().then(() => {
        // Check URL parameters after posts are loaded
        checkUrlParams();
    });
});
