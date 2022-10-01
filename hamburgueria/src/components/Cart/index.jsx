import "../../styles/global";
import "../../styles/cart.css";

import { CartProduct } from "./CartProduct";

export const Cart = ({unidade, produtos, produtoCarrinho, setprodutoCarrinho }) => {
  return (
    <div className="cart">
      <div className="carrinho">
        <h4>Carrinho de compras</h4>
      </div>
                {produtoCarrinho.length === 0 ? (
      <div className="cart__vazio">
        <p>Sua Sacola está Vazia</p>

        <span>Adicione itens</span>
      </div>
      ) : (
      <ul className="cartProduct">
                {produtoCarrinho.map((item, i) => (
   
            <CartProduct
            unidade={unidade}
              key={i}
              produtoCarrinho={produtoCarrinho}
              setprodutoCarrinho={setprodutoCarrinho}
              item={item}
            />
          ))}
      </ul>
      )}
    </div>
  );
};
