import style from "./subject.module.css"

export default function Subject() {
    return (
        <div className={style.container}>
            <div className={style.list}>
                <h2 className={style.title}>MATERIAS</h2>
                <ul>
                    <li><h4>Introducción al derecho</h4></li>
                    <li><h4>Problemas de conocimiento</h4></li>
                    <li><h4>Derecho romano</h4></li>
                    <li><h4>Derecho constitucional</h4></li>
                    <li><h4>Privado 1</h4></li>
                    <li><h4>Penal 1</h4></li>
                    <li><h4>Teorías generales del proceso</h4></li>
                    <li><h4>Obligaciones</h4></li>
                    <li><h4>Penal 2</h4></li>
                    <li><h4>Derecho público provicial y municipal</h4></li>
                    <li><h4>Historiia</h4></li>
                    <li><h4>Sociologia</h4></li>
                    <li><h4>Político</h4></li>
                    <li><h4>Filosofía</h4></li>
                </ul>
            </div>
            <div className={style.list}>
                <h2 className={style.title}>TURNOS</h2>
                <h4 className={style.subtitle}>Clases a convenir</h4>
                <div className={style.time}>
                    <h4>Lunes a viernes </h4>
                    <h4>Tarde y noche</h4>
                </div>
                <div className={style.time}>
                    <h4>Sábados</h4>
                    <h4>9 a 14 h.s.</h4>
                </div>
            </div>
        </div>
    )
}