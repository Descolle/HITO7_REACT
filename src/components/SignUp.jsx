import { useContext, useState } from "react";
import "./SignUp.css";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { MyContext } from "./Context/MyContext";

const SignUp = ({ children, openFormulario, closeRegister }) => {
  const {user,setUser,password,setPassword} = useContext(MyContext);
  const [confirmpassword, setConfirmPassword] = useState("");

  const validacion = (event) => {
    event.preventDefault();
    if (user === "" || password === "" || confirmpassword === "") {
      alert("Email y/o Contraseña no fueron colocados");
      return false;
    }
    if (password !== confirmpassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las Contraseñas no coinciden",
      });
      return;
    }
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tu contraseña es muy corta",
      });
    }
    else {
      Swal.fire({
        title: "Bien Hecho",
        text: "Tu cuenta ha sido creada",
        icon: "success"
      });
    }
  };

  return (
    <div className={`wrapper modal ${openFormulario ? "is-open" : ""}`}>
      <form action="">
        <h1>Sign up</h1>
        <button
          type="button"
          className="modal-close"
          onClick={closeRegister}
        >
           &times;
        </button>
        <div className="input-box">
          <input
            type="email"
            placeholder="Correo"
            required
            onChange={(event) => setUser(event.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Contraseña"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Confirmar Contraseña"
            required
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <button type="submit" onClick={validacion} className="registro">
          Registrarse
        </button>
        <div className="account-exist">
          <label>¿Ya tienes cuenta?</label>
          <Link to="/HITO7_REACT/login">Iniciar Sesión</Link>
        </div>
      </form>
      {children}
    </div>
  );
};

export default SignUp;
