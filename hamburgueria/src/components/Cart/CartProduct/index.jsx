import "../../../styles/cartProduct.css"

export const CartProduct = ({unidade, produtos, produtoCarrinho, setprodutoCarrinho, item }) => {
  function remove(evt) {
    const prod = produtoCarrinho.filter((item) => {
      return item.id != evt.target.id;
    });
    setprodutoCarrinho(prod);
  }
  return (
    <li className="product">
        {unidade > 1 ?
          <span>{unidade}</span>
        :null}
      <figure>

        <img src={item.img} alt="" />
      </figure>

      <div>
        <h2>{item.name}</h2>

        <p>{item.category}</p>
      </div>

      <button type="button" id={item.id} onClick={remove}>
        Remover
      </button>
    </li>
  );
};
