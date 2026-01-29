import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
    <Header/>
    <main className="pt-20">
    <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default App
