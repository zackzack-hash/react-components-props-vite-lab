import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Logic to display emojis based on read time
  const renderEmojis = (time) => {
    const interval = time < 30 ? 5 : 10;
    const emoji = time < 30 ? "☕️" : "🍱";
    let display = "";
    for (let i = 0; i < time; i += interval) {
      display += emoji;
    }
    return display;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {renderEmojis(minutes)} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;