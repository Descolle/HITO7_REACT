import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import lockopen from "../assets/img/lockOpen.png";
import lock from "../assets/img/lock.png";
import SignUp from "./SignUp";
import LogIn from './LogIn';
import { useSign } from "./hooks/useSign";
import { useLogIn } from "./hooks/useLogIn"; // Importa el hook que maneja el estado del modal
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { MyContext } from "./Context/MyContext";

function NavBar() {
  const {token} = useContext(MyContext);
  const [openFormulario, register, closeRegister] = useSign(false); // Controla el estado del modal
  const [abierto, OpenLog, closeLog] = useLogIn();
  const {total} = useContext(CartContext)

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="d-flex">
      <Container>
        <Navbar.Brand>Pizzeria Mamma Mia!</Navbar.Brand>
        <Nav className="me-auto">
          <Button variant="outline-light" className="text-white">
            <Link to="/HITO6_REACT/" className="zelda">🍕Home</Link>
          </Button>
          {/* se elimina el onclick  onClick={register} */}
          <Button
            variant="outline-light"
            className="text-white"
          >
           <Link to="/HITO6_REACT/register" className="zelda"><img src={token ? lockopen : lock} alt="lock status" />
            {token ? "Profile" : "Register"}
            </Link>
          </Button>
          {/* se elimina el onclick  onClick={OpenLog} */}
          <Button variant="outline-light" className="text-white" >
          <Link to="/HITO6_REACT/login" className="zelda">
            <img src={token ? lockopen : lock} alt="lock status" />
            {token ? "LogOut" : "Login"}
            </Link>
          </Button>
        </Nav>
        <Nav className="ms-auto">
        <Link to="/HITO6_REACT/cart" className="zelda valor" >
          <Button variant="outline-light" className="text-white">
            🛒Total:${total.toLocaleString()}
          </Button>
        </Link>
        </Nav>
      </Container>
      {/* <SignUp openFormulario={openFormulario} closeRegister={closeRegister} />
      <LogIn abierto={abierto} CloseLog={closeLog}/> */}
    </Navbar>
  );
}

export default NavBar;
