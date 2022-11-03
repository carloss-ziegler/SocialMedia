import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social Media</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sed
            temporibus nobis ipsum quo quae facilis enim error corrupti nulla!
          </p>
          <span>Já possui uma conta?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Registrar-se</h1>
          <form action="">
            <input autoFocus type="text" placeholder="Nome de usuário" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <input type="text" placeholder="Nome" />
            <button>Registrar-se</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
