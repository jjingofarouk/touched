import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const StoryPage = ({ stories }) => {
  const { id } = useParams(); // id is a string (e.g., "1")
  const story = stories.find((s) => s.id === id); // Find story by id

  const [comments, setComments] = useState(() => {
    return JSON.parse(localStorage.getItem(`comments-${id}`)) || [];
  });
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    localStorage.setItem(`comments-${id}`, JSON.stringify(comments));
  }, [comments, id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, date: new Date().toLocaleString() }]);
      setNewComment("");
    }
  };

  if (!story) {
    return <p style={{ textAlign: "center", color: "#7e8c8c" }}>Story not found!</p>;
  }

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        background: "rgba(255, 255, 255, 0.9)",
        borderRadius: "1rem",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
        border: "1px solid #d2d8d8",
        backdropFilter: "blur(10px)",
      }}
    >
      <Link
        to="/"
        style={{
          color: "#3a8f85",
          textDecoration: "none",
          fontSize: "1rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        <i className="fas fa-arrow-left" /> Back to Stories
      </Link>

      <h1
        style={{
          color: "#2c7269",
          fontSize: "2rem",
          fontWeight: "600",
          margin: "0 0 1rem",
          lineHeight: "1.2",
        }}
      >
        {story.title}
      </h1>
      <blockquote
        style={{
          color: "#4d5c5c",
          fontSize: "1.25rem",
          fontStyle: "italic",
          borderLeft: "3px solid #3a8f85",
          paddingLeft: "1rem",
          margin: "0 0 1rem",
          lineHeight: "1.5",
        }}
      >
        "{story.quote}"
      </blockquote>
      <img
        src={story.image}
        alt={story.title}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "0.75rem",
          marginBottom: "1rem",
          objectFit: "cover",
        }}
      />
      <p
        style={{
          color: "#7e8c8c",
          fontSize: "1rem",
          lineHeight: "1.6",
          margin: "0 0 2rem",
        }}
      >
        {story.story}
      </p>

      {/* Add more sections like comments, social sharing, etc., as needed */}
    </div>
  );
};

export default StoryPage;
