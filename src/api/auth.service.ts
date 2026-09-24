import type { RegisterFormData } from "../schema-zod/schema";
import { httpClient } from "./httpClient";



export async function registerAuth(data: RegisterFormData) {
    return httpClient.post("/api/auth/register",
        {
            ...data,
            authorities: [{
                "authority": "ROLE_USER"
            }]
        }
    ).then((response) => {
        // console.log(response)
        return { success: true, data: response.data };
    }).catch((error) => {
        return Promise.reject(error);
    })
}