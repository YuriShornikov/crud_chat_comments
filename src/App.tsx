import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PostList } from './components/PostList/PostList';
import { PostView } from './components/PostView/PostView';
import { PostNew } from './components/PostNew/PostNew';

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/posts/new" element={<PostNew />} />
                <Route path="/posts/:id" element={<PostView />} />
            </Routes>
        </Router>
    );
}
