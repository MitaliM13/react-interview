import { useState } from "react";

const PostCard = ({ title, body, likes, dislikes, views }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const [viewCount, setViewCount] = useState(views);
  const [userInteraction, setUserInteraction] = useState(null);

  const handleLike = () => {
    if (userInteraction === "like") {
      setLikeCount((prev) => prev - 1);
      setUserInteraction(null);
    } else {
      setLikeCount((prev) =>
        userInteraction === "dislike" ? prev + 2 : prev + 1
      );
      setDislikeCount((prev) =>
        userInteraction === "dislike" ? prev - 1 : prev
      );
      setUserInteraction("like");
    }
  };

  const handleDislike = () => {
    if (userInteraction === "dislike") {
      setDislikeCount((prev) => prev - 1);
      setUserInteraction(null);
    } else {
      setDislikeCount((prev) =>
        userInteraction === "like" ? prev + 2 : prev + 1
      );
      setLikeCount((prev) => (userInteraction === "like" ? prev - 1 : prev));
      setUserInteraction("dislike");
    }
  };

  const handleHover = () => {
    setViewCount((prev) => prev + 1);
  };

  return (
    <article className="post-card" onMouseEnter={handleHover}>
      <header>
        <h4>{title}</h4>
      </header>
      <section>
        <p>{body}</p>
      </section>
      <footer>
        <div className="post-stats">
          <span
            className={userInteraction === "like" ? "liked" : ""}
            onClick={handleLike}
          >
            👍 {likeCount}
          </span>
          <span
            className={userInteraction === "dislike" ? "disliked" : ""}
            onClick={handleDislike}
          >
            👎 {dislikeCount}
          </span>
          <span>👁️ {viewCount}</span>
        </div>
      </footer>
    </article>
  );
};

export default PostCard;
