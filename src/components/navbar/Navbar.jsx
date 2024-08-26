import { Link } from "react-router-dom"
import style from "./navbar.module.css"
import logo from "../../images/tribunal.png"

export default function Navbar() {
    return (
        <div className={style.container}>
            <div className={style.bar}>
                <Link className={style.title} to="/">
                    <div>
                    <button className={style.title}><img className={style.logo} src={logo} alt="logo" />
                        <h1 className={style.title}>Violeta Gómez</h1></button>
                    </div>
                </Link>
            </div>
            <div className={style.bar}>
                <Link to="/subject">
                    <button className={style.btn}><h3>Materias</h3></button>
                </Link>
                <Link to="/contact">
                    <button className={style.btn}><h3>Contacto</h3></button>
                </Link>
            </div>
        </div>
    )
}