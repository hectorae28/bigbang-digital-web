import React, { useRef,useState } from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from '../../firebase';
import './styles.css';

const Contact = ({handleClick}) => {
  const formContact = useRef(null)
  const [errorMessage, setErrorMessage] = useState('')
  //sorry for my ugly code
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const formContactData = new FormData(formContact.current)
    const db = getFirestore(app);
    const raw = {
      'name': formContactData.get('name'),
      'last_name': formContactData.get('last_name'),
      'phone': formContactData.get('phone'),
      'email': formContactData.get('email'),
      'message': formContactData.get('message'),
    }
    try {
      await addDoc(collection(db, "messages"), raw).then(()=>handleClick(0));
    } catch (e) {
      setErrorMessage(`Hubo un error al enviar su mensaje :${e}`);
    }
  }

  return (
    <div className="Contacts">
      <h2 className="title">Contactanos</h2>
      <form ref={formContact} onSubmit={handleContactSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
        />
        <input
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Apellido"
        />
        <input
          type="phone"
          name="phone"
          id="phone"
          placeholder="Telefono"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Ejemplo@mail.com"
        />
        <textarea
          name="message"
          id="message"
          cols="50"
          rows="10"
          placeholder="Mensaje"
        ></textarea>
        <button
          type="submit"
          className="ContactButton"
        >
          Contactanos
        </button>
      </form>
      <p>{errorMessage}</p>
    </div>
  );
};

export default Contact;
