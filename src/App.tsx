import { Navigate, Route, Routes } from 'react-router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import BooksPage from './pages/BooksPage';
import AddBookPage from './pages/AddBook';
import UpdateBookPage from './pages/UpdateBookPage';



export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/addBook" element={<AddBookPage />} />
          <Route path="/updateBook" element={<UpdateBookPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
