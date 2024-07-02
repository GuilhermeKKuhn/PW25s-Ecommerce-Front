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
  quantidade: string | number | readonly string[] | undefined;
  id?: string | number | undefined;
  nome: string;
  descricao: string;
  preco: number;
  urlImage: string;
  categoria: string;
  quantity?: number;
}

export interface ICategory {
  id: number;
  categoria: string;
}

export interface FiltroCategoriaProps {
  categories: ICategory[];
  onCategoryClick: (categoryId: number) => void;
}

export interface IListaProdutosProps {
  produtos?: IProduct[];
}
