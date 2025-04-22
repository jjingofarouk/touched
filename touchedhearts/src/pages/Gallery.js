import React, { useState, useEffect } from "react";
import "../styles/gallery.css";
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const itemsPerPage = 12;

  useEffect(() => {
    const loadGalleryData = async () => {
      try {
        const response = await fetch("/assets/data/gallery.json");
        if (!response.ok) throw new Error("Failed to load gallery data");
        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadGalleryData();
  }, []);

  const filteredImages = galleryData.filter(
    (img) => currentFilter === "all" || img.category === currentFilter
  );

  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const paginatedImages = filteredImages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (category) => {
    setCurrentFilter(category);
    setCurrentPage(1);
  };

  const handleLightboxOpen = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const handleLightboxClose = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      {/* Main Content */}
      <main className="gallery-main">
        <div className="container">
          <h1 className="gallery-title fade-in">Our Gallery</h1>

          {/* Filter Buttons */}
          <div className="filter-bar fade-in">
            {["all", "events", "community", "programs", "education", "healthcare", "disabilities"].map((category) => (
              <button
                key={category}
                className={`filter-btn ${currentFilter === category ? "active" : ""}`}
                onClick={() => handleFilterChange(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {paginatedImages.map((img, index) => (
              <div
                key={index}
                className="gallery-item scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleLightboxOpen(index)}
              >
                <img src={img.src} alt={img.caption} loading="lazy" />
                <div className="gallery-item-caption">{img.caption}</div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
              <FaChevronLeft /> Previous
            </button>
            <span>Page {currentPage} of {totalPages || 1}</span>
            <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
              Next <FaChevronRight />
            </button>
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-modal">
          <div className="lightbox-content">
            <button className="close-btn" onClick={handleLightboxClose}>
              <FaTimes />
            </button>
            <img src={filteredImages[lightboxIndex].src} alt="Gallery Image" />
            <p>{filteredImages[lightboxIndex].caption}</p>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default Gallery;