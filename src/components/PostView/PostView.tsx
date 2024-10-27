import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import  {PostContent } from '../PostContent/PostContent';

type Post = {
    id: number;
    content: string;
    created: number;
};

export function PostView() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [post, setPost] = useState<Post | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState("");
    const [editingContent, setEditingContent] = useState("");

    useEffect(() => {
        fetch(`http://localhost:7070/posts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data.post);
                setContent(data.post.content);
            });
    }, [id]);

    const actions = {
        save: () => {
            fetch(`http://localhost:7070/posts/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: Number(id), content: editingContent }),
            }).then(() => {
                setIsEditing(false);
                setContent(editingContent);
                setPost({ ...post!, content: editingContent });
            });
        },

        // отменяем редакцию
        cancel: () => {
            setIsEditing(false);
            setEditingContent(content);
        },

        // применяем редакцию
        edit: () => {
            setIsEditing(true);
            setEditingContent(content);
        },
        delete: () => {
            fetch(`http://localhost:7070/posts/${id}`, { method: "DELETE" }).then(() => navigate("/"));
        },
        back: () => navigate("/"),
    };

    return post ? (
        <PostContent
            id={post.id}
            content={isEditing ? editingContent : content}
            isEditing={isEditing}
            onContentChange={setEditingContent}
            actions={actions}
        />
    ) : (
        <p>Loading...</p>
    );
}
