import Header from "./components/Header";
import Login from "./components/login";
import Funcionarios from "./components/Funcionarios";
import Contador from "./components/Contador";
import CalculadoraPedidos from "./components/CalculadoraPedidos";
import './App.css';

function App() {
  return (
    <div className="app-container">

      <Header
        titulo="Lanchonete Xpress"
        subtitulo="O melhor da Região"
      />

      <main className="main-content">

        <Login login="Login" />


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