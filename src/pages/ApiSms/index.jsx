import React, { useState, useRef } from 'react';
import { signOut, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase';
import './styles.css';

const ApiSms = () => {
  const [login, setLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const formSms = useRef(null);
  const formLogin = useRef(null);

  const handleSmsSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const formSmsData = new FormData(formSms.current);
    var raw = JSON.stringify({
      phone: formSmsData.get('phone'),
      message: formSmsData.get('message'),
    });
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: raw,
    };

    fetch('throbbing-morning-3272.fly.dev', options)
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        switch (response.errorCode) {
          case 0:
            setErrorMessage('Mensaje enviado');
            break;
          case 101:
            setErrorMessage(
              'Error general verifique el formato del numero telefonico'
            );
            break;
          case 3:
            setErrorMessage('Timeout en la transacción');
            break;
          case 4:
            setErrorMessage('Informacion incompleta');
            break;
          default:
            break;
        }
      })
      .catch((err) => console.error(err));
  };
  const handleLoginSubmit = (e) => {
    const auth = getAuth(app);
    e.preventDefault();
    const formLoginData = new FormData(formLogin.current);
    const email = formLoginData.get('email');
    const pass = formLoginData.get('password');

    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        setLogin(true);
        setErrorMessage(' ');
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/user-not-found':
            setErrorMessage('Usuario no encontrado');
            break;
          case 'auth/wrong-password':
            setErrorMessage('Contraseña invalida');
            break;

          default:
            setErrorMessage('Error Desconocido');
            break;
        }
      });
  };
  const handleLogout = (e) => {
    e.preventDefault();
    setLogin(false);
    signOut(auth);
  };
  return (
    <div className="ApiSms">
      {login ? (
        <div>
          <form ref={formSms} onSubmit={handleSmsSubmit}>
            <div className="field">
              <label>Telefono:</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="584100000000"
                required
              />
            </div>
            <div className="field">
              <label>Mensaje:</label>
              <textarea
                name="message"
                id="message"
                placeholder="Mensaje"
                required
              ></textarea>
            </div>
            {!loading ? (
              <button type="submit" className="ContactButton">
                Enviar mensaje
              </button>
            ) : (
              <button type="submit" className="ContactButton" disabled>
                Enviar mensaje
              </button>
            )}
          </form>
          <button className="ContactButton" onClick={handleLogout}>
            Loguot
          </button>
        </div>
      ) : (
        <form ref={formLogin} onSubmit={handleLoginSubmit}>
          <div className="field">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Ejemplo@email.com"
              required
            />
          </div>
          <div className="field">
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              required
            />
          </div>
          <button type="submit" className="ContactButton">
            Login
          </button>
        </form>
      )}
      <p className="ErrorMessage">{errorMessage}</p>
    </div>
  );
};

export default ApiSms;
