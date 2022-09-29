export const Product = ({ produtos, adiciona }) => {

  return (
    <li>
      <img src={produtos.img} alt={produtos.name} />

      <h2>{produtos.name}</h2>

      <p>{produtos.category}</p>

      <p>R$ {produtos.price}</p>

      <button id={produtos.id} onClick={adiciona}>Adicionar </button>
    </li>
  );
};
