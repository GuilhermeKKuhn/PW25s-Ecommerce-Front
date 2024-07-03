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
  id?: string | number;
  nome: string;
  descricao: string;
  preco: number;
  urlImage: string;
  categoria: string;
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

export interface IPedido {
  data: string;
  itensPedido: IitensPedido[];
}

export interface IitensPedido {
  id?: number;
  produto: IProdutoCarrinho;
  quantidade: number;
}

export interface IProdutoCarrinho {
  id: number;
  nome: string;
  urlImage: string;
  preco: number;
  quantidade: number;
}

export interface IpedidoHistorico {
  id?: number;
  data: string;
  itensPedido: IitensPedido[];
  produto: IProduct;
}

export interface IDetalhesHistorico {
  id?: number;
  produto: IProduct;

  quantidade: number;

  data: string;

  itensPedido: IitensPedido[];
}
