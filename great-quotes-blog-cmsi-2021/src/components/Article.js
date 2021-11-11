export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <h1>Select an article and be inspired!</h1>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="date">{`Posted: ${article.date}`}</p>
          <p className="body">{article.body}</p>
          {article.imagery && (
            <p>
              <img id="photo" src={article.imagery} />
            </p>
          )}
        </section>
      )}
    </article>
  );
}
