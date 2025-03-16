import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const StoryPage = ({ stories }) => {
  const { id } = useParams(); // Get the story ID from the URL
  const story = stories[parseInt(id)]; // Access the story by index

  const [comments, setComments] = useState([]); // Store comments
  const [newComment, setNewComment] = useState(""); // New comment input

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, date: new Date().toLocaleString() }]);
      setNewComment(""); // Clear input
    }
  };

  if (!story) return <p>Story not found!</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <Link to="/" style={{ color: "#3a8f85", textDecoration: "none" }}>
        ← Back to Stories
      </Link>
      <h1 style={{ color: "#2c7269", marginTop: "1rem" }}>{story.title}</h1>
      <blockquote style={{ color: "#4d5c5c", fontStyle: "italic", borderLeft: "3px solid #3a8f85", paddingLeft: "1rem" }}>
        "{story.quote}"
      </blockquote>
      <img
        src={story.image}
        alt={story.title}
        style={{ width: "100%", height: "auto", borderRadius: "0.75rem", margin: "1rem 0" }}
      />
      <p style={{ color: "#7e8c8c", lineHeight: "1.6" }}>{story.story}</p>

      {/* Comments Section */}
      <section style={{ marginTop: "2rem" }}>
        <h3 style={{ color: "#2c7269" }}>Comments</h3>
        <form onSubmit={handleCommentSubmit} style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            style={{ flex: 1, padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #d2d8d8" }}
          />
          <button
            type="submit"
            style={{ padding: "0.5rem 1rem", background: "#3a8f85", color: "#fff", border: "none", borderRadius: "0.5rem" }}
          >
            Post
          </button>
        </form>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} style={{ borderBottom: "1px solid #d2d8d8", padding: "1rem 0" }}>
              <p style={{ margin: "0", color: "#7e8c8c" }}>{comment.text}</p>
              <small style={{ color: "#4d5c5c" }}>{comment.date}</small>
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </section>

      {/* Rich Features Example: Related Stories */}
      <section style={{ marginTop: "2rem" }}>
        <h3 style={{ color: "#2c7269" }}>Related Stories</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          {stories
            .filter((s, i) => i !== parseInt(id) && i < 3) // Show up to 3 other stories
            .map((relatedStory, index) => (
              <Link to={`/story/${index}`} key={index} style={{ textDecoration: "none", color: "#3a8f85" }}>
                <div style={{ border: "1px solid #d2d8d8", padding: "1rem", borderRadius: "0.5rem" }}>
                  <h4>{relatedStory.title}</h4>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default StoryPage;