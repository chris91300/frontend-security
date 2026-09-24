import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { addBookSchema, type AddBookFormData } from '../../../schema-zod/schema';
import { addNewBook } from '../../../api/callApi';

export function AddBookForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddBookFormData>({
        resolver: zodResolver(addBookSchema),
    });
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (data: AddBookFormData) => {
        setErrorMessage("");
        try {
            console.log(data)
            const response = await addNewBook(data);
            console.log(response)
            navigate("/books")
        } catch (error: any) {
            let errorMessage = "Une erreur est survenue.";
            console.log(error.status)
            if (error.status === 400) {
                errorMessage = "mauvaise requête";
            }
            if (error.status === 401) {
                errorMessage = "action interdite";
            }
            if (error.status === 403) {
                errorMessage = "action non autorisée";
            }

            setErrorMessage(errorMessage);
        }

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>


            <label>
                titre
                <input {...register('title')} />
                {errors.title && <span>{errors.title.message}</span>}
            </label>

            <label>
                auteur
                <input {...register('author')} />
                {errors.author && <span>{errors.author.message}</span>}
            </label>

            <label>
                categorie
                <input {...register('category')} />
                {errors.category && <span>{errors.category.message}</span>}
            </label>

            <label>
                année de publication
                <input {...register('yearOfPublication')} />
                {errors.yearOfPublication && <span>{errors.yearOfPublication.message}</span>}
            </label>

            <label>
                nombre d'exemplaire
                <input {...register('copiesAvailable')} />
                {errors.copiesAvailable && <span>{errors.copiesAvailable.message}</span>}
            </label>


            <button type="submit">Envoyer</button>
            <p className='errorMessage'>{errorMessage}</p>
        </form>
    );
}