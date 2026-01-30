import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <>
    <ScrollToTop />
    <Header/>
    <main className="pt-20">
    <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default App
