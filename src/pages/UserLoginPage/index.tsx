import { ChangeEvent, useState } from "react";
import "./style.css";
import axios from "axios";

export function UserLoginPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onClickLogin = () => {
    event?.preventDefault();
    const user = {
      username: form.username,
      password: form.password,
    };

    axios
      .post("http://localhost:8080/login", user)
      .then((response) => {
        console.log("Login efetuado com sucesso" + response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(
            "Falha ao efetuar o login " + error.response.data.message
          );
        }
      });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header bg-primary text-white text-center">
                <h4>Login</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="usuario">Usuario</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Digite seu email"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Digite sua senha"
                      onChange={onChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={onClickLogin}
                  >
                    Entrar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
