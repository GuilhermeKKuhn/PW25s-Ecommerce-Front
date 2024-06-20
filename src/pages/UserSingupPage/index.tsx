import { ChangeEvent, useState } from "react";
import "./style.css";
import axios from "axios";

export function UserSingupPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    endereco: "",
    telefone: "",
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onClickSingup = () => {
    event?.preventDefault();
    const user = {
      username: form.username,
      email: form.email,
      password: form.password,
      endereco: form.endereco,
      telefone: form.telefone,
    };

    axios
      .post("http://localhost:8080/usuario", user)
      .then((response) => {
        console.log("cadastrado com sucesso" + response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log("errro ao cadastrar" + error.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white text-center">
                <h4>Cadastro</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="nome">Nome Completo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Digite seu nome completo"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Digite seu email"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="senha">Senha</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Digite sua senha"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmar-senha">Confirmar Senha</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmar-senha"
                      placeholder="Confirme sua senha"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="endereco">Endereço</label>
                    <input
                      type="text"
                      className="form-control"
                      id="endereco"
                      name="endereco"
                      placeholder="Digite seu endereço"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="telefone"
                      name="telefone"
                      placeholder="Digite seu telefone"
                      onChange={onChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={onClickSingup}
                  >
                    Cadastrar
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
