import withAuthorization from "../components/protected-route/withAuthorization";

function AddBookPage() {

    return <h1>ADD BOOK PAGE</h1>
}

export const ProtectedAddBookPage = withAuthorization(AddBookPage, ["ROLE_USER", "ROLE_ADMIN"]);