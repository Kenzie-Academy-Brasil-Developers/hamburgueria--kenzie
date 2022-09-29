import "./App.css";
import api from "./services/api";
import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";
import { CartTotal } from "./components/CartTotal";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [produtoCarrinho, setprodutoCarrinho] = useState([]);

  function adiciona(ele) {
    const targetButton = ele.target.id;

    produtos.map((item) => {
      if (targetButton === item.id) {
        setprodutoCarrinho([...produtoCarrinho, item]);
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
      <Header produtos={produtos} setProdutos={setProdutos} />
      <main>
        <ProductsList produtos={produtos} adiciona={adiciona} />
        <aside>
          <Cart
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
