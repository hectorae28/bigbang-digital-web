import React, { useState, useRef } from 'react'
import { signOut,getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase'
import './styles.css'

const ApiSms = () => {
  const [login, setLogin] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const formSms = useRef(null);
  const formLogin = useRef(null);

  const handleSmsSubmit = (e) => {
    e.preventDefault();
    const formSmsData = new FormData(formSms.current);
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': 'TaluCLg2Ri9JovkeVtKZS9feS82SaneG66y64eOF',
      },
      body: `{"type":"notify","serviceSID":"VE-Practipush","recipient":"${formSmsData.get('phone')}","message":"${formSmsData.get('message')}"}`
    };

    fetch('https://api.dinama.com/services/messages?countryCod=ve&messageFormat=json', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
  const handleLoginSubmit = (e) => {
    const auth = getAuth(app);
    e.preventDefault()
    const formLoginData = new FormData(formLogin.current)
    const email = formLoginData.get('email')
    const pass = formLoginData.get('password')

    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        setLogin(true)
        setErrorMessage(' ')
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/user-not-found":
            setErrorMessage("Usuario no encontrado")
            break;
          case "auth/wrong-password":
            setErrorMessage("Contraseña invalida")
            break;
        
          default:
            setErrorMessage("Error Desconocido")
            break;
        }
      });
  }
  const handleLogout = (e) => {
    e.preventDefault()
    setLogin(false)
    signOut(auth)
  }
  return (
    <div className="ApiSms">
      {login ?
        <div>
          <form ref={formSms} onSubmit={handleSmsSubmit}>
            <div className="field">
              <label>Telefono:</label>
              <input type="phone" name="phone" id="phone" placeholder="584100000000" required />
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
            <button type="submit" className="ContactButton">Enviar mensaje</button>
          </form>
          <button className="ContactButton" onClick={handleLogout}>Loguot</button>
        </div> :
        <form ref={formLogin} onSubmit={handleLoginSubmit}>
          <div className="field">
            <label>Email:</label>
            <input type="email" name="email" placeholder="Ejemplo@email.com" required />
          </div>
          <div className="field">
            <label>Contraseña:</label>
            <input type="password" name="password" placeholder="********" required />
          </div>
          <button type="submit" className="ContactButton">Login</button>
        </form>}
        <p className='ErrorMessage'>{errorMessage}</p>
    </div>
  )
}

export default ApiSms  