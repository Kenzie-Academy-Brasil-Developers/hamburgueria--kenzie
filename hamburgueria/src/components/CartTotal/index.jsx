export const CartTotal = ({ produtoCarrinho }, setprodutoCarrinho) => {
  const valorTotal = produtoCarrinho.reduce((valorAtual, acc) => {
    return acc.price + valorAtual;
  }, 0);

  return (
    <>
      <div>
        <h5>Total</h5>
        <p> R$ {valorTotal}</p>
      </div>

      <button>Remover todos</button>
    </>
  );
};
