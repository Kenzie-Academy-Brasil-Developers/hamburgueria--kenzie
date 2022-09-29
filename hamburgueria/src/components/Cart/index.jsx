import { CartProduct } from "./CartProduct";

export const Cart = ({ produtoCarrinho, setprodutoCarrinho }) => {
  return (
    <>
      <div>
        <h4>Carrinho de compras</h4>
      </div>

      <div>
        <p>Sua Sacola está Vazia</p>

        <span>Adicione itens</span>
      </div>

      <ul>
        {produtoCarrinho.map((item, i) => (
          <CartProduct
            key={i}
            produtoCarrinho={produtoCarrinho}
            setprodutoCarrinho={setprodutoCarrinho}
            item={item}
          />
        ))}
      </ul>
    </>
  );
};
