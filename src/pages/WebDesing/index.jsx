import React from 'react';
import IconMenu02 from '/public/images/Icons/IconMenu02.png';
import WebDesign01 from '/public/images/WebDesign01.jpeg';
import WebDesign02 from '/public/images/WebDesign02.jpeg';
import WebDesign03 from '/public/images/WebDesign03.png';
import './styles.css';

const WebDesing = () => {
  return (
    <article className="WebDesing">
      <section className="firstSection">
        <div className="description">
          <h1 className="titlePage">Diseño Web</h1>
          <p>
            Creación y deseño de páginas web's, blogs, aplicaciones móviles
            (app), ecommerce, filtros, desarrollo de software corporativo
            (programas exclusivos que permitan la sistematización de las
            empresas, entre otros
          </p>
        </div>
        <img src={IconMenu02} alt="" className="ImageDescription" />
      </section>
      <section className="imageSection reverse">
        <div className="subDescription">
          <h2 className="subtitle">Aplicaciones móviles</h2>
          <p>
            Permite a tu empresa monetizarse por el consumo de tus productos y
            el uso de dicha aplicaión.
          </p>
        </div>
        <img src={WebDesign01} alt="" />
      </section>
      <div className="separador" />
      <section className="imageSection">
        <div className="subDescription">
          <h2 className="subtitle">Páginas Web</h2>
          <p>
            Te permítira estar a la vanguardia digital, te ayúdara a obtener
            base de datos de clientes para poder hacer campañas publicitarias
            más efectivas según el publico que esta buscando tus productos
          </p>
        </div>
        <img src={WebDesign02} alt="" />
      </section>
      <div className="separador" />
      <section className="imageSection reverse">
        <div className="subDescription">
          <h2 className="subtitle">E-commerce</h2>
          <p>
            Una tienda virtual que permite elevar las ventas, para aquellos
            clientes que se encuentran en el mundo digital puedan realizar sus
            compras sin salir de su casa y simplificandole la adquisición de
            productos y/o servicos que desee ofrecer.
          </p>
        </div>
        <img src={WebDesign03} alt="" />
      </section>
    </article>
  );
};

export default WebDesing;
