// blog.js - JavaScript file for handling blog functionality with JSON data

document.addEventListener('DOMContentLoaded', function() {
    // State variables
    let allPosts = [];
    let filteredPosts = [];
    let currentPage = 1;
    let postsPerPage = 3;
    let currentCategory = null;
    let currentSearchTerm = '';
    
    // DOM elements
    const blogGrid = document.getElementById('blog-grid');
    const paginationContainer = document.getElementById('pagination');
    const categoriesList = document.getElementById('categories-list');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const loadingIndicator = document.getElementById('loading-indicator');
    const postTemplate = document.getElementById('blog-post-template');
    
    // Fetch blog data
    fetchBlogData();
    
    // Event listeners
    searchForm.addEventListener('submit', handleSearch);
    
    // Functions
    function fetchBlogData() {
        // Show loading indicator
        loadingIndicator.style.display = 'block';
        
        // Fetch the JSON file
        fetch('./assets/data/blog-posts.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load blog data');
                }
                return response.json();
            })
            .then(data => {
                // Hide loading indicator
                loadingIndicator.style.display = 'none';
                
                // Store posts
                allPosts = data.posts;
                filteredPosts = [...allPosts];
                
                // Initialize posts per page from JSON if available
                if (data.pagination && data.pagination.postsPerPage) {
                    postsPerPage = data.pagination.postsPerPage;
                }
                
                // Render categories
                renderCategories(data.categories);
                
                // Render posts
                renderPosts(currentPage);
                
                // Setup pagination
                setupPagination();
            })
            .catch(error => {
                console.error('Error fetching blog data:', error);
                loadingIndicator.innerHTML = '<p>Failed to load blog posts. Please try again later.</p>';
            });
    }
    
    function renderPosts(page) {
        // Clear current posts
        blogGrid.innerHTML = '';
        
        // Calculate start and end index
        const startIndex = (page - 1) * postsPerPage;
        const endIndex = Math.min(startIndex + postsPerPage, filteredPosts.length);
        
        // Check if no posts match filters
        if (filteredPosts.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.innerHTML = `
                <h3>No posts found</h3>
                <p>Please try a different search term or category.</p>
            `;
            blogGrid.appendChild(noResults);
            paginationContainer.style.display = 'none';
            return;
        }
        
        // Create and append post elements
        for (let i = startIndex; i < endIndex; i++) {
            const post = filteredPosts[i];
            
            // Clone the template
            const postElement = document.importNode(postTemplate.content, true);
            
            // Set post data
            const blogPost = postElement.querySelector('.blog-post');
            blogPost.dataset.postId = post.id;
            
            const postImage = postElement.querySelector('.post-image');
            postImage.src = post.image;
            postImage.alt = post.title;
            
            const postTitle = postElement.querySelector('.post-title');
            postTitle.textContent = post.title;
            postTitle.href = `#post-${post.id}`;
            
            const excerpt = postElement.querySelector('.excerpt');
            excerpt.textContent = post.excerpt;
            
            const fullContent = postElement.querySelector('.full-content');
            fullContent.innerHTML = post.content;
            
            const postMeta = postElement.querySelector('.post-meta');
            postMeta.textContent = `Posted on ${post.date}`;
            
            const categoryTag = postElement.querySelector('.category-tag');
            categoryTag.textContent = post.category;
            
            // Add event listeners
            const readMoreBtn = postElement.querySelector('.read-more-btn');
            readMoreBtn.addEventListener('click', function() {
                handleReadMore(this);
            });
            
            postTitle.addEventListener('click', function(e) {
                e.preventDefault();
                const readMoreBtn = this.closest('.blog-post').querySelector('.read-more-btn');
                handleReadMore(readMoreBtn);
            });
            
            // Append to grid
            blogGrid.appendChild(postElement);
        }
        
        // Update pagination
        updatePagination(page);
    }
    
    function handleReadMore(button) {
        const blogPost = button.closest('.blog-post');
        const fullContent = blogPost.querySelector('.full-content');
        
        blogPost.classList.toggle('expanded');
        
        if (fullContent.style.display === 'block') {
            fullContent.style.display = 'none';
            button.textContent = 'Read More';
            // Scroll to post top when collapsing
            blogPost.scrollIntoView({ behavior: 'smooth' });
        } else {
            fullContent.style.display = 'block';
            button.textContent = 'Read Less';
        }
    }
    
    function renderCategories(categories) {
        if (!categories || !Array.isArray(categories)) {
            // Generate categories from posts if not provided
            const categorySet = new Set();
            allPosts.forEach(post => categorySet.add(post.category));
            categories = Array.from(categorySet);
        }
        
        // Clear the list
        categoriesList.innerHTML = '';
        
        // Add "All" category
        const allItem = document.createElement('li');
        const allLink = document.createElement('a');
        allLink.href = '#';
        allLink.innerHTML = `All <span class="count">${allPosts.length}</span>`;
        allLink.classList.add(currentCategory === null ? 'active' : '');
        allLink.addEventListener('click', function(e) {
            e.preventDefault();
            filterByCategory(null);
        });
        allItem.appendChild(allLink);
        categoriesList.appendChild(allItem);
        
        // Add each category
        categories.forEach(category => {
            const count = allPosts.filter(post => post.category === category).length;
            
            const item = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#';
            link.innerHTML = `${category} <span class="count">${count}</span>`;
            link.classList.add(currentCategory === category ? 'active' : '');
            link.addEventListener('click', function(e) {
                e.preventDefault();
                filterByCategory(category);
            });
            item.appendChild(link);
            categoriesList.appendChild(item);
        });
    }
    
    function filterByCategory(category) {
        currentCategory = category;
        currentPage = 1;
        
        // Update active class in category list
        document.querySelectorAll('#categories-list a').forEach(link => {
            link.classList.remove('active');
            if ((category === null && link.textContent.includes('All')) || 
                link.textContent.includes(category)) {
                link.classList.add('active');
            }
        });
        
        // Filter posts
        if (category === null) {
            filteredPosts = allPosts.filter(post => 
                post.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) || 
                post.excerpt.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
                post.content.toLowerCase().includes(currentSearchTerm.toLowerCase())
            );
        } else {
            filteredPosts = allPosts.filter(post => 
                post.category === category && 
                (post.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) || 
                post.excerpt.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
                post.content.toLowerCase().includes(currentSearchTerm.toLowerCase()))
            );
        }
        
        // Render filtered posts
        renderPosts(currentPage);
    }
    
    function handleSearch(e) {
        e.preventDefault();
        currentSearchTerm = searchInput.value.trim();
        currentPage = 1;
        
        // Apply filters (category and search)
        filterByCategory(currentCategory);
    }
    
    function setupPagination() {
        paginationContainer.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                
                if (e.target.classList.contains('disabled')) {
                    return;
                }
                
                if (e.target.classList.contains('prev')) {
                    if (currentPage > 1) {
                        currentPage--;
                        renderPosts(currentPage);
                    }
                } else if (e.target.classList.contains('next')) {
                    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
                    if (currentPage < totalPages) {
                        currentPage++;
                        renderPosts(currentPage);
                    }
                } else {
                    const pageNum = parseInt(e.target.textContent);
                    if (!isNaN(pageNum)) {
                        currentPage = pageNum;
                        renderPosts(currentPage);
                    }
                }
                
                // Scroll to top of blog section
                document.querySelector('.blog-posts').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    function updatePagination(currentPage) {
        const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
        
        // Show/hide pagination based on number of pages
        if (totalPages <= 1) {
            paginationContainer.style.display = 'none';
            return;
        } else {
            paginationContainer.style.display = 'flex';
        }
        
        // Clear current pagination
        paginationContainer.innerHTML = '';
        
        // Previous button
        const prevLink = document.createElement('a');
        prevLink.href = '#';
        prevLink.className = `prev ${currentPage === 1 ? 'disabled' : ''}`;
        prevLink.innerHTML = '&laquo; Previous';
        paginationContainer.appendChild(prevLink);
        
        // Page numbers
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.className = `page-number ${i === currentPage ? 'active' : ''}`;
            pageLink.textContent = i;
            paginationContainer.appendChild(pageLink);
        }
        
        // Next button
        const nextLink = document.createElement('a');
        nextLink.href = '#';
        nextLink.className = `next ${currentPage === totalPages ? 'disabled' : ''}`;
        nextLink.innerHTML = 'Next &raquo;';
        paginationContainer.appendChild(nextLink);
    }
});
