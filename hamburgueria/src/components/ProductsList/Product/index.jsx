import "../../../styles/reset.css"
import "../../../styles/productList.css"

export const Product = ({ produtos, adiciona }) => {

  return (
    <li>
      <figure>

        <img src={produtos.img} alt={produtos.name} />
      </figure>

      <h2>{produtos.name}</h2>

      <p>{produtos.category}</p>

      <p className="preco">R$ {produtos.price}</p>

      <button id={produtos.id} onClick={adiciona}>Adicionar </button>
    </li>
  );
};
