import React from 'react';

import Home01 from '/public/images/Home01.jpg';
import IconMenu01 from '/public/images/Icons/IconMenu01.png';
import './styles.css';

const Home = () => {
  return (
    <article className="Home">
      <section className="firtSecction">
        <div className="description">
          <h1 className="titlePage">BigBang Digital</h1>
          <p>
            Somos una empresa dedicada a el ramo publicitario, una agencia de
            publicidad en ascenso que cuenta con la capacidad de proyectar
            marcas hasta su mayor expresión. Con una trayectoria de 5 años en el
            mercado y seguimos apostando a más.
            <br />
            <span>Nuestro lema: "Bienvenido al universo digital".</span>
          </p>
        </div>
        <img className="ImgDescription" src={IconMenu01} alt="Logo" />
      </section>
      <section className="secondSecction">
        <div className="subDescription">
          <h2 className="subtitle">Misión</h2>
          <p>
            Posicionar nuestra empresa como una marca en el mundo publicitario a
            través de nuestros servicios, que sean de calidad excelencia, de
            igual manera, ofrecer soluciones avanzadas en el proceso de la
            concepción y ejecución de su empresa para maximizar las conversiones
            con las diferentes estrategías publicitarias.
          </p>
        </div>
        <img className="ImgSubdescription" src={Home01} alt="img" />
      </section>
    </article>
  );
};

export default Home;
