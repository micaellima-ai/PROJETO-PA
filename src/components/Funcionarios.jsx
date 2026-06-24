import './Funcionarios.css'

function Funcionarios(props) {
    return (
        <>
            <div className='funci'>

                <h3>Nome: {props.nome}</h3>
                <p>Cargo: {props.cargo}</p>

            </div>
        </>
    )
}
export default Funcionarios