import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import emailjs from "@emailjs/browser"
import style from "./form.module.css"
import ubicacion from "../../images/ubicacion.png"
import telefono from "../../images/telefono.png"
import email from "../../images/email.png"

export default function Form() {

    const form = useRef()
    const navigate = useNavigate()

    const sendEmail = (e) => {
        e.preventDefault()

        // Validación manual
        const name = form.current.user_name.value.trim();
        const phone = form.current.user_phone.value.trim();
        const email = form.current.user_email.value.trim();
        const subject = form.current.subject.value.trim();
        const message = form.current.message.value.trim();

        if (!name || !phone || !email || !subject || !message) {
            window.alert('Por favor, complete todos los campos antes de enviar.');
            return;
        }

        emailjs
            .sendForm('service_8t75q99', 'contact_form', form.current, {
                publicKey: 'YxzN9DOOOCou-sgUZ'
            })
            .then(
                () => {
                    navigate("/");  // Redirige a la página /home
                    window.alert('Se ha enviado su consulta');
                    console.log('SUCCESS!');
                },
                (error) => {
                    window.alert('No se pudo enviar su consulta')
                    console.log('FAILED...', error.text);
                }
            )
    }

    return (
        <div>
            <div className={style.container}>
                <div className={style.cards}>
                    <div className={style.card}>
                        <img className={style.logo} src={ubicacion} alt="logo" />
                        <p>Rafael Lozada 478, Alta Gracia, Código Postal 5186</p></div>
                    <div className={style.card}>
                        <img className={style.logo} src={telefono} alt="logo" />
                        <p>+54 9 3513 69-2193</p>
                    </div>
                    <div className={style.card}>
                        <img className={style.logo} src={email} alt="logo" />
                        <p>viogomez72@hotmail.com</p>
                    </div>
                </div>
                <div className={style.ask}>
                    <h2>Deje tu consulta</h2>
                    <form className={style.form} ref={form} onSubmit={sendEmail} >
                        <p>
                            <input name="user_name" className={style.input} type="text" placeholder="Nombre y Apellido" required />
                        </p>
                        <p>
                            <input name="user_phone" className={style.input} type="text" placeholder="Número de teléfono" required />
                        </p>
                        <p>
                            <input name="user_email" className={style.input} type="email" placeholder="Correo electrónico" required />
                        </p>
                        <p>
                            <input name="subject" className={style.input} type="text" placeholder="Asunto" required />
                        </p>
                        <p>
                            <textarea name="message" className={style.box} type="text" placeholder="mensaje" required/>
                        </p>
                        <p>
                        <input className={style.btn} type="submit" value="ENVIAR" />
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}