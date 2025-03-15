import React from "react";

const StoryCard = ({ story }) => {
  return (
    <article className="story-card" tabIndex="0">
      <img src={story.image} alt={story.title} className="story-image" loading="lazy" />
      <div className="story-content">
        <h2 className="story-title">{story.title}</h2>
        <blockquote className="story-quote">"{story.quote}"</blockquote>
        <p className="story-text">{story.story}</p>
      </div>
    </article>
  );
};

export default StoryCard;
