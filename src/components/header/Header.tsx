import { Link, useNavigate } from "react-router";
import './header.css'
import { tokenService } from "../../service/TokenService";


export default function Header() {
    const token = tokenService.get();
    const navigate = useNavigate();

    const disconnect = () => {
        tokenService.clear();
        navigate("/");
    }
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">accueil</Link>
                    </li>

                    {
                        token && (
                            <li>
                                <button onClick={disconnect}>deconnexion</button>
                            </li>
                        )

                    }
                </ul>
            </nav>
        </header>
    )
}