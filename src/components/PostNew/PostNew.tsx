import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function PostNew() {
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch("http://localhost:7070/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: 0, content }),
        }).then(() => navigate("/"));
    };

    return (
        <div className="create-post">
            <div className="create-post__top">
                <nav>
                    <ul>
                        <li>Публикация</li>
                        <li>Фото/видео</li>
                        <li>Прямой эфир</li>
                        <li>Ещё</li>
                    </ul>
                </nav>
                <button onClick={() => navigate("/")} className="cancel">X</button>
            </div>

        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your post here..."
            />
            <button className="btn-cancel" type="submit">Publish</button>
        </form>
        
        </div>
    );
}
