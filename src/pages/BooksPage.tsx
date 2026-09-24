import withAuthorization from "../components/protected-route/withAuthorization"

function BooksPage() {

    return <h1>BOOKS PAGE</h1>
}

export const ProtectedBooksPage = withAuthorization(BooksPage, ["ROLE_USER", "ROLE_ADMIN"]);