import { Product } from "./Product";
import "../../styles/global"
import "../../styles/productList"

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
        <div className="productsFiltered">
          {productFiltered.map((item, i) => (
            <Product key={i} produtos={item} adiciona={adiciona} />
          ))}
        </div>
      )}
    </>
  );
};
