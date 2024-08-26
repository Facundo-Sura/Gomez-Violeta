import style from "./home.module.css"
import contenido from "../../images/contenido.png"
import virtual from "../../images/virtual.png"
import examen from "../../images/examen.png"
import ejercicos from "../../images/ejercicios.png"

export default function Home() {
    return (
        <div className={style.container}>
            <div className={style.background}>
                <div className={style.bgtext}>
                    <h1 className={style.title}>ABOGACÍA UNC</h1>
                    <p className={style.subtext}>Obten los conocimientos de la manera más didáctica para que tengas un examen exitoso</p>
                </div>
            </div>
            <div className={style.class}>
                <h2 className={style.subtitle}>Mis Clases</h2>
                <p className={style.text}>Se dictarán el 100% de los contenidos necesarios para rendir el exámen de ingreso, te preparamos en la materia Introducción a los Estudios de la Carrera de Abogacía (IECA).</p>
            </div>
            <div className={style.class}>
                <h2 className={style.subtitle}>Las clases Incluyen</h2>
                <div className={style.content}>
                    <div className={style.item}>
                        <img className={style.image} src={contenido} alt="contenido" />
                        <p>Todos los contenidos desde cero</p>
                    </div>
                    <div className={style.item}>
                        <img className={style.image} src={virtual} alt="virtual" />
                        <p>Clases virtuales con disponibilidad horaria</p>
                    </div>
                    <div className={style.item}>
                        <img className={style.image} src={examen} alt="examen" />
                        <p>Simulacros de exámen</p>
                    </div>
                    <div className={style.item}>
                        <img className={style.image} src={ejercicos} alt="ejercicios" />
                        <p>Ejercitación y actividades prácticas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}