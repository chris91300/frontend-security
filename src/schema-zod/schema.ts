import z from "zod/v3";



const name = z.string().min(1, 'Le nom est requis');
const email = z.string().email('Adresse email invalide');
const password = z.string().min(6, 'Le password doit contenir au moins 6 caractères');

export const registerSchema = z.object({
    name: name,
    email: email,
    password: password
});

export const loginSchema = z.object({
    email: email,
    password: z.string()
});

/**
 *  private String title;

    @Nonnull
    @Column(nullable = false)
    private String author;

    @Nonnull
    @Column(nullable = false)
    private String category;

    @Nonnull
    @Column(nullable = false)
    private String yearOfPublication;

    @Nonnull
    @Column(nullable = false)
    private String copiesAvailable;
 */
export const addBookSchema = z.object({
    title: z.string(),
    author: z.string(),
    category: z.string(),
    yearOfPublication: z.string(),
    copiesAvailable: z.string()
})

export const updateBookSchema = addBookSchema;

export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type AddBookFormData = z.infer<typeof addBookSchema>;
export type UpdateBookFormData = z.infer<typeof updateBookSchema>;