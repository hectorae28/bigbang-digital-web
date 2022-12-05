import React from 'react';
import IconMenu05 from '/public/images/Icons/IconMenu05.png';
import Prints01 from '/public/images/Prints01.png';
import './styles.css';

const Prints = ({handleClick}) => {
  return (
    <article className="Prints">
      <section className="firstSection">
        <div className="description">
          <h1 className="titlePage">
            Impresiones digitales, litográficas y sublimaciones en material Pop
          </h1>
          <p>
            Impresión de papelería de oficina, documentos fiscales y material
            POP.
            <br /> Hojas membretadas, tarjetas de presentación, calendarios,
            agendas, cajas personalizadas, bolsas de papel, carpetas
            personalizadas, volantes, dípticos, trípticos, etc.
          </p>
        </div>
        <img src={IconMenu05} alt="IconMenu04" className="ImageDescription" />
      </section>
      <section className="secondSection">
        <img src={Prints01} alt="Prinst" />
      </section>
      <button onClick={()=>handleClick(9)} className="ContactButton">Contactanos</button>
    </article>
  );
};

export default Prints;
