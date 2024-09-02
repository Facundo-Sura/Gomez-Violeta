import style from "./footer.module.css"
import gmail from "../../images/gmail.png"
import whatsapp from "../../images/whatsapp.png"
import facebook from "../../images/facebook.png"
import instagram from "../../images/instagram.png"

export default function Footer() {
    return (
        <div className={style.container}>
            <div className={style.form}>
                <h2 className={style.title}>Contáctame</h2>
                <div className={style.contact}>
                    <img className={style.logo} src={gmail} alt="gmail" />
                    <p className={style.line}>viogomez72@hotmail.com</p>
                </div>
                <a className={style.contact} href="https://wa.me/qr/CBKEXELZUXX5G1">
                    <img className={style.logo} src={whatsapp} alt="whatapp" />
                    <p className={style.line}>+54 9 3513 69-2193</p>
                </a>
            </div>
            <div className={style.form}>
                <h2 className={style.title}>Redes</h2>
                <a className={style.contact} href="https://www.facebook.com/mariavioleta.gomez?mibextid=qi2Omg&rdid=cYhKubKXjHCfqkbL&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FH998Vb24fWqLJg7D%2F%3Fmibextid%3Dqi2Omg">
                    <img className={style.logo} src={facebook} alt="facebook" />
                    <p className={style.line}>María Violeta Gómez</p>
                </a>
                <a className={style.contact} href="https://www.instagram.com/mariavioletagomez?utm_source=qr">
                    <img className={style.logo} src={instagram} alt="instagram" />
                    <p className={style.line}>maria violeta gomez
                    </p>
                </a>
            </div>
        </div>
    )
}