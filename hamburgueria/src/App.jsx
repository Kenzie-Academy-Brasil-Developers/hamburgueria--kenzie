import "./App.css";

function App() {

  const data = fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((resp) => resp.json())
    console.log(data)

  return <div className="App">teste</div>;
}

export default App;
