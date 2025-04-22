import React, { useState } from "react";
import { Link } from "react-router-dom";
import StoryCard from "../components/StoryCard";
import Pagination from "../components/Pagination";
import SearchFilter from "../components/SearchFilter";
import storiesData from "../data/stories.json";
import "../styles/stories.css";
import reportsHeaderImage from "./reports-header.png"; // Import the header image

// Define theme variables for consistent styling
const theme = {
  // Primary color palette - Warm Teal/Sage
  primaryColor: '#3a8f85',
  primaryDark: '#2c7269',
  primaryLight: '#8cc5bf',
  secondaryColor: '#d68c45',
  secondaryDark: '#b87339',
  secondaryLight: '#e9b384',
  // Neutral colors - Warmer and more organic
  dark: '#2d3a3a',
  darkGray: '#4d5c5c',
  mediumGray: '#7e8c8c',
  lightGray: '#d2d8d8',
  offWhite: '#f8f7f5',
  white: '#ffffff',
  // Accent colors - More earthy and harmonious
  success: '#739e73',
  warning: '#e6b86a',
  error: '#c17b7b',
  info: '#6a91ab',
  // Typography
  fontHeading: "'Lora', serif",
  fontBody: "'Poppins', sans-serif",
  h1Size: 'clamp(2.5rem, 5vw, 3.5rem)',
  h2Size: 'clamp(1.75rem, 4vw, 2.5rem)',
  h3Size: 'clamp(1.25rem, 3vw, 1.75rem)',
  bodySize: 'clamp(1rem, 2vw, 1.125rem)',
  smallText: 'clamp(0.875rem, 1.5vw, 1rem)',
  // Spacing
  spacingXs: '0.5rem',
  spacingSm: '1rem',
  spacingMd: '2rem',
  spacingLg: '4rem',
  spacingXl: '6rem',
};

const Stories = () => {
  const [stories] = useState(storiesData);
  const [filteredStories, setFilteredStories] = useState(storiesData);
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 6;

  // Responsive styles
  const responsiveStyles = {
    pageHeader: window.innerWidth <= 768 ? { padding: `${theme.spacingMd} ${theme.spacingSm}` } : {},
  };

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
      {/* Enhanced Header Section with background image */}
      <section
        role="banner"
        style={{
          textAlign: 'center',
          padding: `${theme.spacingXl} ${theme.spacingSm}`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${reportsHeaderImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: theme.white,
          position: 'relative',
          minHeight: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          ...responsiveStyles.pageHeader,
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1
            style={{
              fontFamily: theme.fontHeading,
              fontSize: theme.h1Size,
              margin: `0 0 ${theme.spacingSm}`,
              color: theme.white,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            }}
          >
            Stories of Hope & Transformation
          </h1>
          <p
            style={{
              fontFamily: theme.fontBody,
              fontSize: theme.bodySize,
              color: theme.offWhite,
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6,
              marginBottom: theme.spacingMd,
            }}
          >
            Discover the real-life journeys of hope, healing, and transformation made possible by Touched Hearts. 
            Each story represents a life changed and a community strengthened through compassion and sustainable support.
          </p>
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: theme.spacingSm,
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => handleSearchFilter("", "all")}
              style={{
                padding: `${theme.spacingXs} ${theme.spacingMd}`,
                backgroundColor: theme.secondaryColor,
                color: theme.white,
                border: 'none',
                borderRadius: '6px',
                fontFamily: theme.fontBody,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
            >
              View All Stories
            </button>
            <Link
              to="/share-story"
              style={{
                padding: `${theme.spacingXs} ${theme.spacingMd}`,
                backgroundColor: 'transparent',
                color: theme.white,
                border: `2px solid ${theme.white}`,
                borderRadius: '6px',
                fontFamily: theme.fontBody,
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              Share Your Story
            </Link>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Stories;