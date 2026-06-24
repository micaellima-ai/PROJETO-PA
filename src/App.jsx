import Header from "./components/Header";
import Login from "./components/login";
import CardProd from "./components/CardProd";
import Funcionarios from "./components/Funcionarios"; 


function App() {
  return (
    <>
      <Header titulo= "Lanchonete Xpress" 
        subtitulo= "O melhor da Região"/>
        
      <Login login="Login"/>

      <CardProd lanche="X-Burguer" valor="R$ 15,90" />
      <CardProd lanche="X-Salada" valor="R$ 17,90" />
      <CardProd lanche="Refrigerante" valor="R$ 6,00" />
      
      <Funcionarios nome="João" cargo="Atendente"/>
      
    </>

  )
}

export default App