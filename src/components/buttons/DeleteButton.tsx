import { useState } from "react"
import { deleteBookWithId } from "../../api/callApi"

type Props = {
    id: string
    removeBook: () => void
}

export default function Deletebutton({ id, removeBook }: Props) {

    const [errorMessage, setErrorMessage] = useState("");

    const deleteBook = async () => {
        try {
            await deleteBookWithId(id);
            removeBook();
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Une erreur est survenue.")
            }
        }
    }

    return (
        <>
            <button onClick={deleteBook}>supprimer</button>
            <p className="error">{errorMessage}</p>
        </>
    )
}