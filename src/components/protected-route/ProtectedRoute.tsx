import { Navigate } from "react-router";
import { tokenService } from "../../service/TokenService"

type Props = {
    children: React.ReactNode
}

export default function ({ children }: Props) {
    const token = tokenService.get();    
    if (!token) {
        return <Navigate to="/" replace/>
    }

    return children
}