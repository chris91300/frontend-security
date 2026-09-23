import { Link } from "react-router";
import './homePage.css';

export default function HomePage() {

    return (
        <>
            <h1>HOME PAGE</h1>
            <section id="home-page-links">
                <Link to="/register">s'inscrire</Link>
                <Link to="/login">se connecter</Link>
            </section>
        </>
    )
}