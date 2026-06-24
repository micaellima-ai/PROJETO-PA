import './Login.css'

function Login(props) {
    return (
        <>
            <div className="login">

                <h2>{props.login}</h2>
                <input type="text" id="id_usuario" placeholder="Usuário" />
                <br />
                <input type="password" id="id_senha" placeholder="Senha" />
                <button id="bt_enviar">Entrar</button>
                

                <a href="">Esqueceu a Senha?</a>

            </div>


        </>
    )
}
export default Login