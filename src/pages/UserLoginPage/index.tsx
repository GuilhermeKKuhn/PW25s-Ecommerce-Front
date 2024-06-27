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
                      placeholder="Digite seu usuario"
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
                    colorScheme="blue"
                    onClick={onClickLogin}
                    disabled={apiPendente}
                  >
                    Entrar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
