import React from 'react';
import MenuIcon06 from '/public/images/Icons/IconMenu06.png';
import Branding05 from '/public/images/Branding05.jpg';
import Branding01 from '/public/images/Branding01.jpg';
import Branding02 from '/public/images/Branding02.jpg';
import Branding03 from '/public/images/Branding03.jpg';
import Branding04 from '/public/images/Branding04.jpg';
import './styles.css';

const GraphicDesign = () => {
  return (
    <article className="GraphicDesign">
      <section className="firstSection">
        <div className="description">
          <h1 className="titlePage">Diseño Grafico</h1>
          <p>
            Diseño de Logotipos, post, flyers,identidad corporativas,
            vectorización de logotipos, diseño de vallas publicitarias y todo lo
            que amérite creaciones de artes tanto impresos como digitales.
          </p>
        </div>
        <img src={MenuIcon06} alt="MenuIcon06" className="ImageDescription" />
      </section>
      <section className="imageSection reverse">
        <h2 className="subtitle">Post publicitarios para redes sociales</h2>
        <img src={Branding05} alt="" />
      </section>
      <div className="separador" />
      <section className="imageSection">
        <h2 className="subtitle">Identidad corporativa (Branding)</h2>
        <img src={Branding01} alt="" />
        <img src={Branding02} alt="" />
      </section>
      <div className="separador" />
      <section className="imageSection reverse">
        <h2 className="subtitle">Creación de Logotipo</h2>
        <img src={Branding03} alt="" />
      </section>
      <div className="separador" />
      <section className="imageSection">
        <h2 className="subtitle">Digitalización y vectorización de logos</h2>
        <img src={Branding04} alt="" />
      </section>
    </article>
  );
};

export default GraphicDesign;
