import "../../styles/global";
import "../../styles/cartTotal.css";

export const CartTotal = ({ produtoCarrinho }) => {
  const valorTotal = produtoCarrinho.reduce((valorAtual, acc) => {
    return Math.round(acc.price) + valorAtual;
  }, 0);

  return (
    <>
      <div className="cartTotal">
        <h5>Total</h5>
        <p> R$ {valorTotal},00</p>
      </div>

      <button id="remove">Remover todos</button>
    </>
  );
};
