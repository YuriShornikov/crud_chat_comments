import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Post = {
  id: number;
  content: string;
  created: number;
};

export function PostList() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("http://localhost:7070/posts")
        .then((res) => res.json())
        .then(setPosts);
    }, []);

    return (
        <div className="posts">
            <div className="posts-create">
                <button className="btn-create">
                    <Link to="/posts/new">Создать пост</Link>
                </button>
            </div>
            <div className="posts-list">
                {posts.map((post) => (
                <div key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <h2>Post {post.id}</h2>
                        <p>{post.content}</p>
                    </Link>
                </div>
                ))}
            </div>
        </div>
    );
}
