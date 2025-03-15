import React from "react";

const StoryCard = ({ story }) => {
  return (
    <article
      className="story-card"
      tabIndex="0"
      style={{
        background: "rgba(255, 255, 255, 0.9)",
        borderRadius: "1rem",
        padding: "1.5rem",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
        border: "1px solid #d2d8d8",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "400px",
        margin: "0 auto",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 25px rgba(58, 143, 133, 0.15)",
        },
      }}
    >
      <img
        src={story.image}
        alt={story.title}
        className="story-image"
        loading="lazy"
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "0.75rem",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      />
      <div
        className="story-content"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        <h2
          className="story-title"
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#2c7269", // --primary-dark
            margin: "0",
            lineHeight: "1.2",
            animation: "fadeIn 0.5s ease-out",
          }}
        >
          {story.title}
        </h2>
        <blockquote
          className="story-quote"
          style={{
            fontSize: "1.125rem",
            fontStyle: "italic",
            color: "#4d5c5c", // --dark-gray
            margin: "0",
            paddingLeft: "1rem",
            borderLeft: "3px solid #3a8f85", // --primary-color
            lineHeight: "1.5",
            animation: "fadeIn 0.6s ease-out 0.1s backwards",
          }}
        >
          "{story.quote}"
        </blockquote>
        <p
          className="story-text"
          style={{
            fontSize: "1rem",
            color: "#7e8c8c", // --medium-gray
            lineHeight: "1.6",
            margin: "0",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            animation: "fadeIn 0.7s ease-out 0.2s backwards",
          }}
        >
          {story.story}
        </p>
      </div>
    </article>
  );
};

// Inline keyframes for animations
const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default StoryCard;