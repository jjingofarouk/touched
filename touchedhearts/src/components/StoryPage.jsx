import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const StoryPage = ({ stories }) => {
  const { id } = useParams(); // id is a string from the URL (e.g., "1")
  const story = stories.find((s) => s.id === id); // Find story by id

  // Comments state with localStorage persistence
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
      {/* Back Link */}
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

      {/* Story Content */}
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

      {/* Social Sharing */}
      <div style={{ marginBottom: "2rem", display: "flex", gap: "1rem" }}>
        <button
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?text=${encodeURIComponent(story.title)}&url=${window.location.href}`
            )
          }
          style={{
            padding: "0.5rem 1rem",
            background: "#3a8f85",
            color: "#fff",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
        >
          Share on Twitter
        </button>
        <button
          onClick={() =>
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`)
          }
          style={{
            padding: "0.5rem 1rem",
            background: "#3a8f85",
            color: "#fff",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
        >
          Share on Facebook
        </button>
      </div>

      {/* Comments Section */}
      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "#2c7269", fontSize: "1.5rem", marginBottom: "1rem" }}>Comments</h3>
        <form onSubmit={handleCommentSubmit} style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            style={{
              flex: 1,
              padding: "0.75rem",
              borderRadius: "0.5rem",
              border: "1px solid #d2d8d8",
              fontSize: "1rem",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.75rem 1.5rem",
              background: "#3a8f85",
              color: "#fff",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
          >
            Post
          </button>
        </form>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #d2d8d8",
                padding: "1rem 0",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <p style={{ margin: "0", color: "#7e8c8c", fontSize: "1rem" }}>{comment.text}</p>
              <small style={{ color: "#4d5c5c", fontSize: "0.875rem" }}>{comment.date}</small>
            </div>
          ))
        ) : (
          <p style={{ color: "#7e8c8c", fontSize: "1rem" }}>No comments yet. Be the first to comment!</p>
        )}
      </section>

      {/* Related Stories */}
      <section>
        <h3 style={{ color: "#2c7269", fontSize: "1.5rem", marginBottom: "1rem" }}>Related Stories</h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {stories
            .filter((s) => s.id !== id) // Exclude the current story
            .slice(0, 3) // Show up to 3 related stories
            .map((relatedStory) => (
              <Link
                to={`/story/${relatedStory.id}`} // Use the id field
                key={relatedStory.id} // Use id as key
                style={{
                  textDecoration: "none",
                  flex: "1 1 200px",
                  minWidth: "200px",
                }}
              >
                <div
                  style={{
                    border: "1px solid #d2d8d8",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    background: "rgba(255, 255, 255, 0.9)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <h4 style={{ color: "#3a8f85", margin: "0", fontSize: "1.25rem" }}>{relatedStory.title}</h4>
                  <p
                    style={{
                      color: "#7e8c8c",
                      fontSize: "0.875rem",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      margin: "0.5rem 0 0",
                    }}
                  >
                    {relatedStory.story}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default StoryPage;