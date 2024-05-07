import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";


const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the JWT token from local storage
    localStorage.removeItem('jwtToken');
    // Redirect to the login page or any other desired page
    navigate('/login');
};
  return (
    <>
       <NavBar onLogout={handleLogout} />
      <Outlet />
     
    </>
  )
};

export default Layout;