import { useState } from 'react';
import './Calculadora.css';

export default function CalculadoraPedidos() {

  const [qtdBurguer, setQtdBurguer] = useState(1);
  const [qtdSalada, setQtdSalada] = useState(1);
  const [qtdRefri, setQtdRefri] = useState(1);


  const precoBurguer = 15.50;
  const precoSalada = 17.50;
  const precoRefri = 6.00;


  const total = (qtdBurguer * precoBurguer) + (qtdSalada * precoSalada) + (qtdRefri * precoRefri);


  const diminuirBurguer = () => {
    if (qtdBurguer > 0) setQtdBurguer(qtdBurguer - 1);
  };

  const diminuirSalada = () => {
    if (qtdSalada > 0) setQtdSalada(qtdSalada - 1);
  };

  const diminuirRefri = () => {
    if (qtdRefri > 0) setQtdRefri(qtdRefri - 1);
  };

  return (
    <div className="calculadora-container">

      <h2 className="calculadora-titulo">
        Calculadora de Pedidos
      </h2>


      <div className="item-pedido">
        <p className="item-texto">X-Burguer - R$ {precoBurguer.toFixed(2).replace('.', ',')}</p>
        <div className="controles-wrapper">
          <button className="btn-calculadora" onClick={diminuirBurguer}>-</button>
          <span className="quantidade-numero">{qtdBurguer}</span>
          <button className="btn-calculadora" onClick={() => setQtdBurguer(qtdBurguer + 1)}>+</button>
        </div>
      </div>


      <div className="item-pedido">
        <p className="item-texto">X-Salada - R$ {precoSalada.toFixed(2).replace('.', ',')}</p>
        <div className="controles-wrapper">
          <button className="btn-calculadora" onClick={diminuirSalada}>-</button>
          <span className="quantidade-numero">{qtdSalada}</span>
          <button className="btn-calculadora" onClick={() => setQtdSalada(qtdSalada + 1)}>+</button>
        </div>
      </div>


      <div className="item-pedido ultimo">
        <p className="item-texto">Refrigerante - R$ {precoRefri.toFixed(2).replace('.', ',')}</p>
        <div className="controles-wrapper">
          <button className="btn-calculadora" onClick={diminuirRefri}>-</button>
          <span className="quantidade-numero">{qtdRefri}</span>
          <button className="btn-calculadora" onClick={() => setQtdRefri(qtdRefri + 1)}>+</button>
        </div>
      </div>


      <h1 className="total-exibicao">
        Total: R$ {total.toFixed(2).replace('.', ',')}
      </h1>

    </div>
  );
}