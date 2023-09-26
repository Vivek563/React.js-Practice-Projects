import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer.jsx"
import { Outlet } from "react-router-dom"


function App() {
  

  return (
    <>

    <Header/>
    <Outlet />
    <Footer />

    </>
   
  )
}

export default App
