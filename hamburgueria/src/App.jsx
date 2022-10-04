import "./App.css";
import api from "./services/api";
import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";
import { CartTotal } from "./components/CartTotal";
import { GlobalStyle } from "./styles/global";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [produtoCarrinho, setprodutoCarrinho] = useState([]);
  const [unidade, setUnidade] = useState(1);
  const [inptSearch, setInptSearch] = useState("");
  const [productFiltered, setProductFiltered] = useState([]);

  function adiciona(element) {
    const targetButton = element.target.id;

    produtos.find((item) => {
      if (targetButton == item.id) {
        setprodutoCarrinho([...produtoCarrinho, item]);

     /*    produtoCarrinho.map((itemCarrinho, i, arr) => {
          if (item.name === itemCarrinho.name) {
            setUnidade(unidade + 1);
          }
        }); */
      }
    });
  }

  useEffect(() => {
    api
      .get()
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((erro) => console.log(erro));
  }, [setprodutoCarrinho]);

  return (
    <div className="App">
      <GlobalStyle />
      <Header
        produtos={produtos}
        productFiltered={productFiltered}
        setInptSearch={setInptSearch}
        setProductFiltered={setProductFiltered}
      />
      <main>
        <ProductsList
          produtos={produtos}
          adiciona={adiciona}
          productFiltered={productFiltered}
        />
        <aside>
          <Cart
            unidade={unidade}
            produtos={produtos}
            produtoCarrinho={produtoCarrinho}
            setprodutoCarrinho={setprodutoCarrinho}
          />
          <CartTotal
            produtoCarrinho={produtoCarrinho}
            setprodutoCarrinho={setprodutoCarrinho}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
