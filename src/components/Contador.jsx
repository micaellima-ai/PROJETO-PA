import { useState } from 'react'
import './Contador.css'

function Contador({ lanche, preco }) {
    
    const [quantidade, setQuantidade] = useState(0)

    
    const precoTotal = quantidade * preco

    return (
        <div className='contador-container'>
            <h1>{lanche}</h1>
            
            <p>Preço: R$ {preco}</p>
            <p>Quantidade {quantidade}</p>
            <p><strong>Preço Total: R$ {precoTotal}</strong></p>

            <div className='botoes-grupo'>

                <button onClick={() => setQuantidade(quantidade + 1)}>Adicionar</button>
                <button onClick={() => { if (quantidade > 0) setQuantidade(quantidade - 1) }}>Remover</button>
               
                <button className='bt_impar' onClick={() => setQuantidade(0)}>Limpar</button>

            </div>
        </div>
    )
}

export default Contador