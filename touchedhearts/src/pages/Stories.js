import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoryCard from "../components/StoryCard";
import Pagination from "../components/Pagination";
import SearchFilter from "../components/SearchFilter";
import storiesData from "../data/stories.json"; // Assuming stories.json is in the data folder
import '../styles/stories.css';

const Stories = () => {
  const [stories, setStories] = useState(storiesData);
  const [filteredStories, setFilteredStories] = useState(storiesData);
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 6;

  // Handle search and filter
  const handleSearchFilter = (searchTerm, category) => {
    const filtered = stories.filter((story) => {
      const matchesSearch =
        story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.story.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        category === "all" ||
        (category === "healthcare" && story.story.includes("health")) ||
        (category === "education" && story.story.includes("school")) ||
        (category === "disability" && story.story.includes("disability")) ||
        (category === "community" && story.story.includes("community"));
      return matchesSearch && matchesCategory;
    });
    setFilteredStories(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  };

  // Pagination logic
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = filteredStories.slice(indexOfFirstStory, indexOfLastStory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="stories-page">
      {/* Navbar */}


      {/* Page Header */}
      <section className="page-header">
        <div className="header-content">
          <h1>Impact Stories</h1>
          <p>Discover the real-life journeys of hope, healing, and transformation made possible by Touched Hearts.</p>
        </div>
      </section>

      {/* Stories Section */}
      <section className="stories-section" aria-label="Impact Stories">
        {/* Search and Filter */}
        <SearchFilter onSearchFilter={handleSearchFilter} />

        {/* Stories Grid */}
        <div className="stories-grid">
          {currentStories.length > 0 ? (
            currentStories.map((story, index) => (
              <StoryCard key={index} story={story} />
            ))
          ) : (
            <p className="no-stories-message">No stories match your criteria. Try adjusting your search or filter!</p>
          )}
        </div>

        {/* Pagination */}
        <Pagination
          storiesPerPage={storiesPerPage}
          totalStories={filteredStories.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default Stories;