const PostCard = ({title, body, likes, dislikes, views }) => {
    return (
      <article className="post-card">
        <header>
          <h4>{title}</h4>
        </header>
        <section>
          <p>{body}</p>
        </section>
        <footer>
          <div className="post-stats">
            <span>👍 {likes}</span>
            <span>👎 {dislikes}</span>
            <span>👁️ {views}</span>
          </div>
        </footer>
      </article>
    );
  };
  
  export default PostCard;
  