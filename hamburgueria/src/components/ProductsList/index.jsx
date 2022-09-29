import { Product } from "./Product";

export const ProductsList = ({produtos, adiciona}) => {
  
  return (
    <ul>
      {
      produtos.map((item, i) => (
        <Product key={i} produtos={item} adiciona={adiciona} />
      ))}
    </ul>
  );
};
