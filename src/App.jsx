import Header from "./components/Header";
import Login from "./components/login";

function App() {
  return (
    <>
      <Header titulo= "Lanchonete Xpress" 
        subtitulo= "O melhor da Região"/>
        
      <Login login="Login" 
        entrar="Entre aqui"/>
    </>

  )
}

export default App