import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout({ totalItems }) {
  return (
    <div>
      <Navbar totalItems={totalItems} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
