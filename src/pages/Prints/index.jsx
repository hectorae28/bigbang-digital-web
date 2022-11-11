import React from 'react';
import IconMenu05 from '/public/images/Icons/IconMenu05.png';
import Prints01 from '/public/images/Prints01.png';
import './styles.css';

const Prints = () => {
  return (
    <article className="Prints">
      <section className="firstSection">
        <div className="decription">
          <h1 className="titlePage">
            Impreciones digitales, litográficas y sublimaciones en material Pop
          </h1>
          <p>
            Impresión de papelería de oficina, documentos fiscales y material
            POP.
            <br /> Hojas membretadas, tarjetas de presentación, canlendarios,
            agendas, cajas personalizadas, bolsas de papel, carpetas
            personalizadas, volantes, díptico, trípticos, etc.
          </p>
        </div>
        <img src={IconMenu05} alt="IconMenu04" className="ImageDescription" />
      </section>
      <section className="secondSection">
        <img src={Prints01} alt="Prinst" />
      </section>
    </article>
  );
};

export default Prints;
