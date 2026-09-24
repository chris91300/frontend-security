import { useParams } from "react-router";
import withAuthorization from "../components/protected-route/withAuthorization";
import { useEffect, useState } from "react";
import Loading from "../components/loading/Loading";
import { type BookType } from "../type/type";
import { getBook } from "../api/callApi";
import { UpdateBookForm } from "../components/forms/update-book/UpdateBookForm";

export function UpdateBookPage() {

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [book, setBook] = useState<BookType>();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {

        async function getBookToUpdate(id: string) {
            try {
                const book = await getBook(id);
                setBook(book);
            } catch (error) {
                if (error instanceof Error) {
                    setErrorMessage(error.message);
                } else {
                    setErrorMessage("Une erreur est survenue.");
                }
                setError(true);
            } finally {
                setIsLoading(false)
            }
        }

        if (id) {
            getBookToUpdate(id);
        }
    })

    return (
        <>
            <h1>UPDATE BOOK PAGE</h1>
            {isLoading && <Loading size="medium" />}

            {error && <p className="error">{errorMessage}</p>}

            {(!isLoading && book && !error) && <UpdateBookForm book={book} />}
        </>
    )
}

export const ProtectedUpdateBookPage = withAuthorization(UpdateBookPage, ["ROLE_USER", "ROLE_ADMIN"]);