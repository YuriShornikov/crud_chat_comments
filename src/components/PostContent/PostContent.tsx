import { PostTools } from '../PostTools/PostTools';

type PostContentProps = {
    id: number;
    content: string;
    isEditing: boolean;
    onContentChange: (value: string) => void;
    actions: {
        save: () => void;
        cancel: () => void;
        edit: () => void;
        delete: () => void;
        back: () => void;
    };
};

export function PostContent({ id, content, isEditing, onContentChange, actions }: PostContentProps) {
    return (
        <div className="tool-post">
            <h1>{isEditing ? `Edit Post ${id}` : `Post ${id}`}</h1>
            {isEditing ? (
                <textarea value={content} onChange={(e) => onContentChange(e.target.value)} />
            ) : (
                <p>{content}</p>
            )}
            <PostTools actions={actions} isEditing={isEditing} />
        </div>
    );
}
