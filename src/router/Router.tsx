import { Navigate, Route, Routes } from 'react-router';
import HomePage from '../pages/home-page/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import BooksPage from '../pages/BooksPage';
import AddBookPage from '../pages/AddBook';
import UpdateBookPage from '../pages/UpdateBookPage';

export default function Router() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/addBook" element={<AddBookPage />} />
            <Route path="/updateBook" element={<UpdateBookPage />} />

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}