type PostToolsProps = {
    actions: {
        save: () => void;
        cancel: () => void;
        edit: () => void;
        delete: () => void;
        back: () => void;
    };
    isEditing: boolean;
};

export function PostTools({ actions, isEditing }: PostToolsProps) {
    return (
        <div className="tools">
            {isEditing ? (
                <>
                    <button onClick={actions.save}>Save</button>
                    <button onClick={actions.cancel}>Cancel</button>
                </>
            ) : (
                <>
                    <button onClick={actions.edit}>Edit</button>
                    <button onClick={actions.delete}>Delete</button>
                    <button onClick={actions.back}>Back to List</button>
                </>
            )}
        </div>
    );
}
