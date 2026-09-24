import type { LoginFormData, RegisterFormData } from "../schema-zod/schema";
import { tokenService } from "../service/TokenService";
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

export async function loginAuth(data: LoginFormData) {
    return httpClient.post("/api/auth/login",
        data
    ).then((response) => {
        return { success: true, data: response.data };
    }).catch((error) => {
        return error;
    })
}


export function hasRole(role: "USER" | "ADMIN") {
    const userRole = getRole();
    const currentRole = `ROLE_${role}`;

    if (userRole === currentRole) {
        return true;
    } else {
        return false;
    }
}

export function isAdmin() {
    const role = getRole();
    if (role === "ROLE_ADMIN") {
        return true;
    } else {
        return false;
    }
}


export function getRole() {
    const token = tokenService.get();

    if (!token) {
        throw new Error("utilisateur non authentifié");
    }
    const payload = token.split(".")[1];
    const data = window.atob(payload);
    const parsedData = JSON.parse(data);
    const scope = parsedData.scope;
    const role = scope.split(" ")[0];
    return role as string;
}