import Header from "./components/Header";
import Login from "./components/login";
import CardProd from "./components/CardProd";
import Funcionarios from "./components/Funcionarios";
import Contador from "./components/Contador"; 

function App() {
  return (
    <>
      <Header 
        titulo="Lanchonete Xpress" 
        subtitulo="O melhor da Região"
      />
        
      <Login login="Login"/>

      
      <CardProd lanche="X-Burguer" valor="R$ 25,00" />
      <CardProd lanche="X-Salada" valor="R$ 17,90" />
      <CardProd lanche="Refrigerante" valor="R$ 6,00" />
      
      
      <Contador lanche="X-Burguer" preco={25} />

      <Funcionarios nome="João" cargo="Atendente"/>
    </>
  )
}

export default App