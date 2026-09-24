import { Link } from "react-router";
import './header.css'


export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">accueil</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}