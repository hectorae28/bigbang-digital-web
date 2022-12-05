import React from 'react';
import IconMenu07 from '/public/images/Icons/IconMenu07.png';
import Photo01 from '/public/images/Photo01.JPG';
import Photo02 from '/public/images/Photo02.JPG';
import Photo03 from '/public/images/Photo03.png';
import Photo04 from '/public/images/Photo04.png';
import Photo05 from '/public/images/Photo05.png';
import './styles.css';

const Photographs = ({ handleClick }) => {
  return (
    <article className="Photographs">
      <section className="firstSection">
        <div className="description">
          <h1 className="titlePage">Fotografías y Audiovisuales</h1>
          <p>
            Foto producto de Alimentos preparados, productos, prendas de vestir,
            fotografía profesional para la imagen personal, videos publicitarios
            con voces de locutores certificados, videos publicitarios.
          </p>
        </div>
        <img src={IconMenu07} alt="" className="ImageDescription" />
      </section>
      <section className="secondSection">
        <h2 className="subtitle ">Fotoproducto</h2>
        <div className="ImagesContainer">
          <img src={Photo01} alt="Photo01" />
          <img src={Photo02} alt="Photo02" />
          <img src={Photo03} alt="Photo03" />
        </div>
      </section>
      <div className="separador" />
      <section className="imageSection reverse">
        <div className="subDescription">
          <h2 className="subtitle">videos</h2>
          <p>
            Videos publicitarios con voces de locutores certificados, videos
            publicitarios.
          </p>
        </div>
        <img src={Photo04} alt="" />
      </section>
      <div className="separador" />
      <section className="imageSection">
        <div className="subDescription">
          <h2 className="subtitle">Retratos</h2>
          <p>Fotografía profesional para la imagen personal</p>
        </div>
        <img src={Photo05} alt="" />
      </section>
      <button onClick={() => handleClick(9)} className="ContactButton">
        Contactanos
      </button>
    </article>
  );
};

export default Photographs;
