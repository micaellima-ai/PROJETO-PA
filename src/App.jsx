import Header from "./components/Header";
import Login from "./components/login";
import Funcionarios from "./components/Funcionarios";
import Contador from "./components/Contador";
import CalculadoraPedidos from "./components/CalculadoraPedidos";
import './App.css';

function App() {
  const lanches =[
    {id: 1, nome: "X-salada", preco: 17.50},
    {id: 2, nome :"X-Burguer", preco: 15.50},
    {id: 3, nome :"Refrigerante", preco: 6.00}
  ]

  return (
    <div className="app-container">

      <Header
        titulo="Lanchonete Xpress"
        subtitulo="O melhor da Região"
      />

      <main className="main-content">

        <Login login="Login" />

        {lanches.map(lanche=>(
          <cardProd
          key ={lanche.id}
          nome ={lanche.name}
          preco ={lanche.preco}
          />
        ))}


        <h2>Cardápio</h2>
        <div className="cards-row">
          <Contador lanche="X-Burguer" preco={15.5} />
          <Contador lanche="X-Salada" preco={17.5} />
          <Contador lanche="Refrigerante" preco={6} />
        </div>


        <h2>Fechamento do Pedido</h2>
        <CalculadoraPedidos />


        <Funcionarios nome="João" cargo="Atendente" />
      </main>

    </div>
  )
}

export default App;