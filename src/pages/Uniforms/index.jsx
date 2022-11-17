import React from 'react';
import MenuIcon08 from '/public/images/Icons/IconMenu08.png';
import Uniform01 from '/public/images/Uniform01.png';
import Uniform02 from '/public/images/Uniform02.jpg';
import Uniform03 from '/public/images/Uniform03.jpg';
import './styles.css';

const Uniforms = () => {
  return (
    <article className="Uniforms">
      <section className="firstSection">
        <div className="description">
          <h1 className="titlePage">Uniformes</h1>
          <p>
            Estampados, bordados y sublimación de franelas, chemises, camisas
            tipo KE, tapabocas, gorras, uniformes corporativos y más.
          </p>
        </div>
        <img src={MenuIcon08} alt="" className="ImageDescription" />
      </section>
      <section className="Imagesection">
        <div className="parts">
          <h2 className="titles">Gorras</h2>
          <div className="ImagesContainer">
            <img src={Uniform01} alt="" />
          </div>
        </div>
        <div className="parts">
          <h2 className="titles">Tapabocas</h2>
          <div className="ImagesContainer">
            <img src={Uniform02} alt="" />
          </div>
        </div>
        <div className="parts">
          <h2 className="titles">Chemises</h2>
          <div className="ImagesContainer">
            <img src={Uniform03} alt="" />
          </div>
        </div>
      </section>
    </article>
  );
};

export default Uniforms;
