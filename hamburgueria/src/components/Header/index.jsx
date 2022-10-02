import "../../styles/global";
import "../../styles/header.css";

export const Header = ({
  produtos,
  inptSearch,
  setInptSearch,
  productFiltered,
  setProductFiltered,
}) => {
  const productSearch = (inpt) => {
    const inptTratado = inpt.toUpperCase();
    setInptSearch(inptTratado);

    setProductFiltered(
      produtos.filter(
        (item) =>
          item.category.toUpperCase().includes(inptTratado) ||
          item.name.toUpperCase().includes(inptTratado)
      )
    );
  };

  return (
    <header>
      <div className="titulo">
        <h1>Burguer</h1>
        <h2>Kenzie</h2>
      </div>

      {productFiltered.length < 1 ? (
        <p></p>
      ) : (
        <h3>Não Encontramos o produto</h3>
      )}

      <div>
        <input
          type="text"
          value={inptSearch}
          onChange={(evt) => productSearch(evt.target.value)}
          placeholder="Digitar Pesquisa"
        />

        <button type="button" onClick={() => productSearch(inptSearch)}>
          Pesquisar
        </button>
      </div>
    </header>
  );
};
