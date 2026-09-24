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

export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;