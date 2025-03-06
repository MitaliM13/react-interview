const PostCard = ({id, title, body, likes, dislikes, views}) => {
    return (
        <><div key={id}>
            <span>{id}</span>
            <h4>{title}</h4>
            <p>{body}</p>
            <span>{likes}</span>
            <span>{dislikes}</span>
        </div><div>
                <h6>{views}</h6>
            </div></>
    )
}

export default PostCard