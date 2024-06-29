export interface IUserSignup {
  username: string;
  email: string;
  password: string;
  endereco: string;
  telefone: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  endereco: string;
  telefone: string;
}

export interface IProduct {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  urlImage: string;
  categoria: string;
}

export interface ICategory {
  id: string;
  categoria: string;
}
