import React from 'react';
import IconMenu09 from '/public/images/Icons/IconMenu09.png';
import SMS01 from '/public/images/SMS01.png';
import './styles.css';

const SMS = ({ handleClick }) => {
  return (
    <article className="SMS">
      <section className="firstSection">
        <div className="description">
          <h1 className="title">SMS Marketing</h1>
          <p>
            Envíos masivo a nuestra base de datos segmentada y
            validada,estadísticas en tiempo real.
          </p>
        </div>
        <img src={IconMenu09} alt="" className="ImageDescription" />
      </section>
      <section className="textSection">
        <div className="Text">
          <h2 className="subtitle">Beneficios de SMS Marketing</h2>
          <ul>
            <li>Fideliza y mantiene a sus clientes leales.</li>
            <li>Añade interactividad a un soporte físico y estático.</li>
            <li>Extiende la capacidad de comunicación con sus clientes</li>
            <li>
              Facilita el control estadístico para mediciones de audiencia,
            </li>
          </ul>
        </div>
        <div className="Text">
          <h2 className="subtitle">Donde se puede utilizar el SMS</h2>
          <ul>
            <li>Descargas de aplicaciones(Apps)</li>
            <li>Comercio Electrónico, Marketing y Remarketing.</li>
            <li>Venta de Productos y servicios.</li>
            <li>
              Comunicación de eventos (Espetáculos, Comercios, Ferias, ...)
            </li>
            <li>Promociones On Off Line.</li>
            <li>Adquisición de nuevos clientes y prospectos.</li>
            <li>En la creación de sistemas de alertas.</li>
            <li>En desarrollo de aplicaciones de comercio móvil.</li>
          </ul>
        </div>
      </section>
      <h2 className="subtitle">Campañas de marketing SMS</h2>
      <section className="secondSection">
        <img src={SMS01} alt="" />
      </section>
      <button onClick={() => handleClick(9)} className="ContactButton">
        Contactanos
      </button>
      <button onClick={() => handleClick(10)} className="ContactButton">
        Api
      </button>
    </article>
  );
};

export default SMS;
