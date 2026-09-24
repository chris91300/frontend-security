import React from "react"
import ProtectedRoute from "./ProtectedRoute"
import { RoleRoute } from "./RoleRoute"



export default function withAuthorization<T extends {}>(Component: React.FC, roles: string[]){

    return function ComponentWithAuthorization(props: T){
        return(
            <ProtectedRoute>
                <RoleRoute roles={roles}>
                    <Component {...props}/>
                </RoleRoute>
            </ProtectedRoute>
        )
    }
}