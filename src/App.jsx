import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Form from "./views/form/Form"
import Subject from "./views/subject/Subject"
import Home from "./views/home/Home"
import Footer from "./components/footer/Footer"
import style from "./app.module.css"

function App() {

  return (
    <div className={style.container}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<Form />} />
        <Route path="/subject" element={<Subject />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
