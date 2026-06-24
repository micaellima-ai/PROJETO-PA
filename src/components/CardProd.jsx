import './CardProd.css'

function CardProd(props) {
    return (
        <>
            <div className='lanches'>

                <h3>{props.lanche}</h3>
                <p>{props.valor}</p>

            </div>
        </>
    )
}
export default CardProd