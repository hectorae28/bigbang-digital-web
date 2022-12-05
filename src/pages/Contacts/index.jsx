import React from 'react';
import './styles.css';

const Contact = () => {
  return (
    <div className="Contacts">
      <h2 className="title">Contactanos</h2>
      <form action="" method="POST">
        <input type="text" name="name" id="name" placeholder="Nombre" />
        <input
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Apellido"
        />
        <input type="phone" name="phone" id="phone" placeholder="Telefono" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Ejemplo@mail.com"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Mensaje"
        ></textarea>
        <button type="submit" className="ContactButton">
          Contactanos
        </button>
      </form>
    </div>
  );
};

export default Contact;
