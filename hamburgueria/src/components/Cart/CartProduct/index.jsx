export const CartProduct = ({ produtoCarrinho, setprodutoCarrinho, item }) => {
  function remove(evt) {
    const prod = produtoCarrinho.filter((item) => {
      return item.id !== evt.target.id;
    });
    setprodutoCarrinho(prod);
  }
  return (
    <li>
      <img src={item.img} alt="" />

      <div>
        <h2>{item.name}</h2>

        <p>{item.price}</p>
      </div>

      <button type="button" id={item.id} onClick={remove}>
        Remover
      </button>
    </li>
  );
};
