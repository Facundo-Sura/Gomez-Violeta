import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./navbar.module.css";
import logo from "../../images/logo.jpeg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={style.container}>
            <div className={style.bar}>
                <Link className={style.title} to="/">
                    <button className={style.title}>
                        <img className={style.logo} src={logo} alt="logo" />
                        <h1 className={style.title}>Violeta Gómez</h1>
                    </button>
                </Link>
                <button className={style.hamburger} onClick={toggleMenu}>
                    ☰
                </button>
            </div>
            <div className={`${style.menu} ${isOpen ? style.menuOpen : ''}`}>
                <Link className={style.title} to="/subject">
                    <h3 className={style.btn}>Materias</h3>
                </Link>
                <Link className={style.title} to="/contact">
                    <h3 className={style.btn}>Contacto</h3>
                </Link>
            </div>
        </div>
    );
}
