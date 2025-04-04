import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import StoryCard from "../components/StoryCard";
import StoryPage from "../components/StoryPage";
import Pagination from "../components/Pagination";
import SearchFilter from "../components/SearchFilter";
import storiesData from "../data/stories.json";
import "../styles/stories.css";

const Stories = () => {
  const [stories] = useState(storiesData);
  const [filteredStories, setFilteredStories] = useState(storiesData);
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 6;

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
    setCurrentPage(1);
  };

  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = filteredStories.slice(indexOfFirstStory, indexOfLastStory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="stories-page">
      <section className="page-header">
        <div className="header-content">
          <h1>Impact Stories</h1>
          <p>Discover the real-life journeys of hope, healing, and transformation made possible by Touched Hearts.</p>
        </div>
      </section>

      <Routes>
        <Route
          path="/"
          element={
            <section className="stories-section" aria-label="Impact Stories">
              <SearchFilter onSearchFilter={handleSearchFilter} />
              <div className="stories-grid">
                {currentStories.length > 0 ? (
                  currentStories.map((story) => (
                    <Link
                      to={`/story/${story.id}`}
                      key={story.id}
                      style={{ textDecoration: "none" }}
                    >
                      <StoryCard story={story} />
                    </Link>
                  ))
                ) : (
                  <p className="no-stories-message">No stories match your criteria. Try adjusting your search or filter!</p>
                )}
              </div>
              <Pagination
                storiesPerPage={storiesPerPage}
                totalStories={filteredStories.length}
                currentPage={currentPage}
                paginate={paginate}
              />
            </section>
          }
        />
        <Route
          path="/story/:id"
          element={<StoryPage stories={filteredStories} />}
        />
      </Routes>
    </div>
  );
};

export default Stories;
