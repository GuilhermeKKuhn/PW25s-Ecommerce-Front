import { ChangeEvent, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { IUserLogin } from "@/commons/interfaces";
import AuthService from "@/services/AuthService";
import { Button } from "@chakra-ui/react";

export function UserLoginPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate(); //usado para redirecionar para outra rota
  const [apiError, setapiError] = useState("");
  const [apiSuccess, setapiSuccess] = useState("");
  const [apiPendente, setApiPendente] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setapiError("");
  };

  const onClickLogin = async () => {
    setApiPendente(true);
    event?.preventDefault();
    const user: IUserLogin = {
      username: form.username,
      password: form.password,
    };

    const response = await AuthService.login(user);
    if (response.status === 200 || response.status === 201) {
      setapiSuccess("Login efetuado com sucesso");
      setTimeout(() => {
        setApiPendente(false);
        navigate("/"); //redireciona para a pagina inicial
      }, 2000);
    } else {
      setapiError("Falha ao efetuar o login ");
      if (response.data.validationErrors) {
        console.log("Falha ao efetuar o login " + response.data.message);
      }
      setApiPendente(false);
    }

    // axios
    //   .post("http://localhost:8080/login", user)
    //   .then((response) => {
    //     console.log("Login efetuado com sucesso" + response.data);
    //     navigate("/"); //redireciona para a pagina inicial
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       console.log(
    //         "Falha ao efetuar o login " + error.response.data.message
    //       );
    //     }
    //   });
  };

  return (
    <>
      <div className="background">
        <div className="container">
          <div className="login-box">
            <h4>Login</h4>
            <form onSubmit={onClickLogin}>
              <div className="input-field">
                <label htmlFor="username">Usuário</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Digite seu usuário"
                  onChange={onChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Digite sua senha"
                  onChange={onChange}
                />
              </div>
              <div className="recup">
                <label>
                  <input type="checkbox" className="check"/>
                </label>
                <h3>Lembre de mim</h3>
                <a href="#">Esqueceu a senha?</a>
              </div>
              {apiError && (
                <div className="alert alert-danger" role="alert">
                  {apiError}
                </div>
              )}
              {apiSuccess && (
                <div className="alert alert-success" role="alert">
                  {apiSuccess}
                </div>
              )}
              <Button
                className="botao"
                py={4}
                colorScheme="gray"
                type="submit"
                isLoading={apiPendente}
              >
                Entrar
              </Button>
              <div className="dir-cadastro">
                Não tem cadastro?<a href="#">cadastre-se</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
