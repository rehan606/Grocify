import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import ScrollToTop from "../ScrollTop/ScrollTop"
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton"


const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}

export default Layout