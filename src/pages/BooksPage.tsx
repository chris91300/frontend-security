import { useEffect, useState } from "react";
import withAuthorization from "../components/protected-route/withAuthorization"
import type { BookType } from "../type/type";
import { getBooks } from "../api/callApi";
import Loading from "../components/loading/Loading";
import BooksList from "../components/books/BooksList";
import { isAdmin } from "../api/auth.service";
import { Link } from "react-router";

function BooksPage() {

    const [books, setBooks] = useState<BookType[]>([]);
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const isAnAdmin = true; //isAdmin();

    useEffect(() => {

        async function getAllBooks() {
            try {
                const books = await getBooks();
                console.log(books)
                setBooks(books);

            } catch (error) {
                if (error instanceof Error) {
                    setErrorMessage(error.message)
                } else {
                    setErrorMessage("Une erreur est survenue.")
                }
                setError(true);

            }
            finally {
                setLoading(false)
            }
        }

        if (isLoading) {
            getAllBooks();
        }


    }, [isLoading])

    return (
        <>
            <h1>BOOKS PAGE</h1>
            {error && <p className="error">{errorMessage}</p>}
            {isLoading && <Loading size="medium" />}
            {!isLoading && <BooksList books={books} isAdmin={isAnAdmin} />}

            {isAnAdmin && <Link to="/addBook">ajouter un livre</Link>}

        </>
    )
}

export const ProtectedBooksPage = withAuthorization(BooksPage, ["ROLE_USER", "ROLE_ADMIN"]);