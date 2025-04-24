

/* src/styles/HeroSection.css */
.hero-header {
  padding-left: 0;
  margin-top: 0;
  position: relative;
  margin-bottom: 2rem; /* Space below hero */
}

.hero-carousel {
  height: 70vh; /* Default for laptops */
  min-height: 400px;
  max-height: 800px;
}

.hero-image {
  position: relative;
  width: 100%;
  height: 70vh; /* Matches carousel */
  min-height: 400px;
  max-height: 800px;
}

.hero-mask {
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.hero-content {
  text-align: center;
  color: #ffffff; /* Bold white base for all text */
}

.hero-title {
  color: #ffffff !important; /* Very bold white */
  font-weight: bold !important;
  margin-bottom: 1rem;
  font-size: 3rem;
}

.hero-subtitle {
  color: #ffffff !important; /* Very white */
  font-weight: normal;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.hero-button {
  color: #ffffff !important; /* Very bold white */
  font-weight: bold !important;
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 5px;
  border: 2px solid;
  transition: all 0.3s ease;
  display: inline-block;
  font-size: 1.1rem;
}

.d-flex {
  display: flex;
}

.justify-content-center {
  justify-content: center;
}

.align-items-center {
  align-items: center;
}

/* Carousel controls */
.carousel-control-prev,
.carousel-control-next {
  z-index: 3; /* Above overlay */
  width: 5%;
}

.carousel-indicators {
  z-index: 3;
  bottom: 10px;
}

/* Media Queries for Responsiveness */

/* Laptops (1024px and up) */
@media (min-width: 1024px) {
  .hero-carousel,
  .hero-image {
    height: 70vh;
  }
  .hero-title {
    font-size: 3rem;
  }
  .hero-subtitle {
    font-size: 1.25rem;
  }
  .hero-button {
    padding: 12px 30px;
    font-size: 1.1rem;
  }
}

/* Tablets (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .hero-carousel,
  .hero-image {
    height: 60vh;
    min-height: 350px;
  }
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-subtitle {
    font-size: 1.1rem;
  }
  .hero-button {
    padding: 10px 25px;
    font-size: 1rem;
  }
}

/* Phones (up to 767px) */
@media (max-width: 767px) {
  .hero-carousel,
  .hero-image {
    height: 50vh;
    min-height: 300px;
  }
  .hero-content {
    padding: 0 10px; /* Prevent text from touching edges */
  }
  .hero-title {
    font-size: 2rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
  .hero-button {
    padding: 8px 20px;
    font-size: 0.9rem;
  }
  .carousel-control-prev,
  .carousel-control-next {
    width: 10%;
  }
}

/* Very small phones (up to 576px) */
@media (max-width: 576px) {
  .hero-carousel,
  .hero-image {
    height: 45vh;
    min-height: 250px;
  }
  .hero-title {
    font-size: 1.5rem;
  }
  .hero-subtitle {
    font-size: 0.9rem;
  }
  .hero-button {
    padding: 6px 15px;
    font-size: 0.85rem;
  }
}

