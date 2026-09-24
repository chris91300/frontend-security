import { useState } from "react"
import type { BookType } from "../../type/type"
import Deletebutton from "../buttons/DeleteButton"
import UpdateButton from "../buttons/UpdateButton"
import './book.css'

type Props = {
    book: BookType
    isAdmin: boolean
}

export default function Book({ book, isAdmin }: Props) {

    const [isDeleted, setIsDeleted] = useState(false);
    const deleteBook = () => {
        setIsDeleted(true)
    }

    if (isDeleted) {
        return null;
    }

    return (
        <article className="book">
            <p className="title">{book.title}</p>
            <p>écrit par: {book.author}</p>
            <p>genre: {book.category}</p>
            <p>publié en: {book.yearOfPublication}</p>
            <p>quantité: {book.copiesAvailable}</p>

            {isAdmin &&
                <div className="buttons">
                    <UpdateButton id={book.id} />
                    <Deletebutton id={book.id} removeBook={deleteBook} />
                </div>
            }
        </article>
    )

}
