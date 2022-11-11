import React from 'react';
import SocialMedia01 from '/public/images/SocialMedia01.jpg';
import SocialMedia02 from '/public/images/SocialMedia02.jpg';
import SocialMedia03 from '/public/images/SocialMedia03.jpg';
import SocialMedia04 from '/public/images/SocialMedia04.jpg';
import IconMenu03 from '/public/images/Icons/IconMenu03.png';
import './styles.css';

const SocialMedia = () => {
  return (
    <article className="SocialMedia">
      <section className="firstSecction">
        <div className="description">
          <h1 className="titlePage">Redes Sociales</h1>
          <p>
            Diseño del branding de la marca, desarrollo del buyer de persona,
            estrategias para las campañas publicitarias campañas sms,robot de
            whatsapp, community manager.
          </p>
        </div>
        <img className="ImgDescription" src={IconMenu03} alt="Logo" />
      </section>
      <section className="Imagesection">
        <div className="titles">
          <span>Diseño de feed</span>
          <span>Campañas publicitarias</span>
        </div>
        <div className="ImagesContainer">
          <img src={SocialMedia01} alt="RedesSociales" />
          <img src={SocialMedia02} alt="RedesSociales" />
          <img src={SocialMedia03} alt="RedesSociales" />
          <img src={SocialMedia04} alt="RedesSociales" />
        </div>
      </section>
    </article>
  );
};

export default SocialMedia;
