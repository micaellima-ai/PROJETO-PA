import { useState } from 'react'    
import './Contador.css'

function Contador() {
    const [contador, setContador] = useState(0)
    return (
        <>
            <div className='add'>
                <h1>{contador}</h1>
                <button onClick={() => setContador(contador +1)}>Adicionar</button>
                
                <button onClick={() => setContador(contador -1)}>Diminuir</button>
                
                <button onClick={() => setContador(0)}>Limpar</button>
            </div>
        </>
    )
}
export default Contador
