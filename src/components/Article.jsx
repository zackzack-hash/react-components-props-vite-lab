function Article({ title, date, preview, minutes }) {
  return (
    <article>
      <h2>{title}</h2>
      {date && <p>{date}</p>}
      <p>{preview}</p>
      <p>{minutes} min read</p>
    </article>
  );
}

export default Article;