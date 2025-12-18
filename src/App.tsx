import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import WordPage from './pages/WordPage';
import TimerPage from './pages/TimerPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    path="/"
                    element={<HomePage />}
                />
                <Route
                    path="/word"
                    element={<WordPage />}
                />
                <Route
                    path="/timer"
                    element={<TimerPage />}
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
