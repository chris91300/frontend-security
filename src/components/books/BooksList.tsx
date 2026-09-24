import type { BookType } from "../../type/type"
import Book from "./Book"

type Props = {
    books: BookType[]
    isAdmin: boolean
}

export default function BooksList({ books, isAdmin }: Props) {
    console.log(books)
    const list = books.map((book) => <Book key={book.id} book={book} isAdmin={isAdmin} />);


    if (list.length === 0) {
        return <p>Aucun livre pour le moment</p>
    } else {
        return list
    }


}