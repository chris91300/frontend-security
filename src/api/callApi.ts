import type { BookType } from "../type/type";
import { httpClient } from "./httpClient";


export async function getBooks(): Promise<BookType[]> {
    return httpClient.get("/api/books")
        .then(response => response.data)
        .catch(error => error)
}


export async function deleteBookWithId(id: string) {
    return httpClient.delete(`/api/books/${id}`)
        .catch(error => error)
}