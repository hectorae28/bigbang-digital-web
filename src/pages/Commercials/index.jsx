import React from 'react';
import IconMenu04 from '/public/images/Icons/IconMenu04.png';
import Commercials01 from '/public/images/Commercials01.jpg';
import Commercials02 from '/public/images/Commercials02.jpeg';
import Commercials03 from '/public/images/Commercials03.png';
import Commercials04 from '/public/images/Commercials04.jpeg';
import Commercials05 from '/public/images/Commercials05.jpeg';
import Commercials06 from '/public/images/Commercials06.jpeg';
import Commercials07 from '/public/images/Commercials07.png';
import Commercials08 from '/public/images/Commercials08.png';
import Commercials09 from '/public/images/Commercials09.png';

import './styles.css';

const Commercials = ({ handleClick }) => {
  const imagesIndex = [
    {
      image: Commercials01,
      tag: 'Impreción de vinyl',
    },
    {
      image: Commercials02,
      tag: 'Pendón',
    },
    {
      image: Commercials03,
      tag: 'Sky Dancer',
    },
    {
      image: Commercials04,
      tag: 'Iglú',
    },
    {
      image: Commercials06,
      tag: 'Arco Inflable',
    },
    {
      image: Commercials07,
      tag: 'Marquesinas',
    },
    {
      image: Commercials08,
      tag: 'Vallas',
    },
    {
      image: Commercials09,
      tag: 'Banderines',
    },
  ];
  return (
    <article className="Commercials">
      <section className="firstSection">
        <div className="description">
          <h1 className="titlePage">Anuncios Publicitarios</h1>
          <p>
            Publicidad de exteriores, impresiones de vinil, banner acrílico en
            3D Corporeos publicitarios, vallas publicitarias y marquesinas,
            pendones, inflables, banderines, pancartas, inflables publicitarios.
          </p>
        </div>
        <img src={IconMenu04} alt="IconMenu" className="ImageDescription" />
      </section>
      <section className="secondSection">
        {imagesIndex.map((item, index) => (
          <div className="imageCard" key={index}>
            <p>{item.tag}</p>
            <img src={item.image} alt={item.tag} />
          </div>
        ))}
      </section>
      <button onClick={() => handleClick(9)} className="ContactButton">
        Contactanos
      </button>
    </article>
  );
};

export default Commercials;
