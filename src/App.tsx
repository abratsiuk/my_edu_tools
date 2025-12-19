import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import WordPage from './pages/WordPage';
import TimerPage from './pages/TimerPage';
import NotFoundPage from './pages/NotFoundPage';
import TestsPage from './pages/TestsPage';
import CoursesPage from './pages/CoursesPage';
import BooksPage from './pages/BooksPage';

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    path="/"
                    element={
                        <Navigate
                            to="/timer"
                            replace
                        />
                    }
                />
                <Route
                    path="/timer"
                    element={<TimerPage />}
                />
                <Route
                    path="/word"
                    element={<WordPage />}
                />
                <Route
                    path="/courses"
                    element={<CoursesPage />}
                />
                <Route
                    path="/tests"
                    element={<TestsPage />}
                />
                <Route
                    path="/books"
                    element={<BooksPage />}
                />
                <Route
                    path="/404"
                    element={<NotFoundPage />}
                />
                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/404"
                            replace
                        />
                    }
                />
            </Route>
        </Routes>
    );
}
