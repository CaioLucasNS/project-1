export const PostCard = ({ title, cover, body, id }) => (
    <div key={id} className="post">
        <img src={cover} alt={title} />
        <div className="post-content">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    </div>
);