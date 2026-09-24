import { Navigate, Route, Routes } from 'react-router';
import HomePage from '../pages/home-page/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import { ProtectedBooksPage } from '../pages/BooksPage';
import { ProtectedAddBookPage } from '../pages/AddBook';
import { ProtectedUpdateBookPage } from '../pages/UpdateBookPage';

export default function Router() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/books" element={<ProtectedBooksPage />} />
            <Route path="/addBook" element={<ProtectedAddBookPage />} />
            <Route path="/updateBook" element={<ProtectedUpdateBookPage />} />

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}