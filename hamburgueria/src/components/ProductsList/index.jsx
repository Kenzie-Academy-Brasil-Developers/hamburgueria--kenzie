import { Product } from "./Product";

export const ProductsList = ({ produtos, adiciona, productFiltered }) => {
  return (
    <>
      {productFiltered.length === 0 ? (
        <ul>
          {produtos.map((item, i) => (
            <Product key={i} produtos={item} adiciona={adiciona} />
          ))}
        </ul>
      ) : (
        <div>
          {productFiltered.map((item, i) => (
            <Product key={i} produtos={item} adiciona={adiciona} />
          ))}
        </div>
      )}
    </>
  );
};
