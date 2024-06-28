import { ChangeEvent, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import AuthService from "@/services/AuthService";
import { IUserSignup } from "@/commons/interfaces";
import { BotaoAcesso } from "@/components/BotaoAcesso";
import { Button } from "@chakra-ui/react";

export function UserSingupPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    endereco: "",
    telefone: "",
  });

  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    endereco: "",
    telefone: "",
  });

  const navigate = useNavigate();
  const [apiPendente, setApiPendente] = useState(false);
  const [apiError, setApiError] = useState("");
  const [apiSuccess, setApiSuccess] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    setError((prev) => ({ ...prev, [name]: undefined }));
    setApiError("");
  };

  const onClickSingup = async () => {
    event?.preventDefault();
    setApiPendente(true);
    const user: IUserSignup = {
      username: form.username,
      email: form.email,
      password: form.password,
      endereco: form.endereco,
      telefone: form.telefone,
    };

    const response = await AuthService.signup(user);
    if (response.status === 200 || response.status === 201) {
      setApiSuccess("Cadastrado com sucesso");
      setTimeout(() => {
        setApiPendente(false);
        navigate("/login");
      }, 2000);
    } else {
      if (response.data.validationErrors) {
        setApiError("Falha ao efetuar o cadastro");
        setError(response.data.validationErrors);
      }
      setApiPendente(false);
    }
  };

  return (
    <>
    <div className="background">
    <div className="container">
        <div className="cadastro-box">
          <div>
            <div>
                <h4>Cadastro</h4>
              <div>
                <form>
                  <div className="signup-field">
                    <label htmlFor="nome">Nome Completo</label>
                    {error.username && (
                      <div className="invalid-feedback">{error.username}</div>
                    )}
                    <input
                      type="text"
                      className={
                        "form-control" + (error.username ? "is-invalid" : "")
                      }
                      id="username"
                      name="username"
                      placeholder="Digite seu nome completo"
                      onChange={onChange}
                    />
                  </div>
                  <div className="signup-field">
                    <label htmlFor="email">Email</label>
                    {error.email && (
                      <div className="invalid-feedback">{error.email}</div>
                    )}
                    <input
                      type="email"
                      className={
                        "form-control" + (error.email ? "is-invalid" : "")
                      }
                      id="email"
                      name="email"
                      placeholder="Digite seu email"
                      onChange={onChange}
                    />
                  </div>
                  <div className="signup-field">
                    <label htmlFor="senha">Senha</label>
                    {error.password && (
                      <div className="invalid-feedback">{error.password}</div>
                    )}
                    <input
                      type="password"
                      className={
                        "form-control" + (error.password ? "is-invalid" : "")
                      }
                      id="password"
                      name="password"
                      placeholder="Digite sua senha"
                      onChange={onChange}
                    />
                  </div>
                  <div className="signup-field">
                    <label htmlFor="confirmar-senha">Confirmar Senha</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmar-senha"
                      placeholder="Confirme sua senha"
                      onChange={onChange}
                    />
                  </div>
                  <div className="signup-field">
                    <label htmlFor="endereco">Endereço</label>
                    {error.endereco && (
                      <div className="invalid-feedback">{error.endereco}</div>
                    )}
                    <input
                      type="text"
                      className={
                        "form-control" + (error.endereco ? "is-invalid" : "")
                      }
                      id="endereco"
                      name="endereco"
                      placeholder="Digite seu endereço"
                      onChange={onChange}
                    />
                  </div>
                  <div className="signup-field">
                    <label htmlFor="telefone">Telefone</label>
                    {error.telefone && (
                      <div className="invalid-feedback">{error.telefone}</div>
                    )}
                    <input
                      type="text"
                      className={
                        "form-control" + (error.telefone ? "is-invalid" : "")
                      }
                      id="telefone"
                      name="telefone"
                      placeholder="Digite seu telefone"
                      onChange={onChange}
                    />
                  </div>
                  {apiError && (
                    <div className="alert alert-danger">{apiError}</div>
                  )}
                  {apiSuccess && (
                    <div className="alert alert-success">{apiSuccess}</div>
                  )}
                  <Button
                  className="botao"
                  py={4}
                  colorScheme="gray"
                  type="submit"
                  isLoading={apiPendente}
                  >
                  Cadastrar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
