import withAuthorization from "../components/protected-route/withAuthorization";

function UpdateBookPage() {

    return <h1>UPDATE BOOK PAGE</h1>
}

export const ProtectedUpdateBookPage = withAuthorization(UpdateBookPage, ["ROLE_USER", "ROLE_ADMIN"]);