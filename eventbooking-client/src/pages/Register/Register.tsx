import { useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../../services/api';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
  const [eroare, setEroare] = useState('');
  const nav = useNavigate();

  const handleRegister = async (e: any) => {
    e.preventDefault();
      setEroare('');

     if (!firstName) {
        setEroare('Pune prenumele');
      return;
     }
     if (!lastName) {
       setEroare('Pune numele de familie');
       return;
     }
    if (!email) {
       setEroare('Pune email');
     return;
    }
     if (!password) {
      setEroare('Pune parola');
      return;
     }

    try {
      await api.post('/auth/register', {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
      });

      nav('/login');
    } catch (err) {
       setEroare('Eroare la inregistrare sau conexiune server');
    }
  };

  return (
    <div className="container">
      <h2>Inregistrare cont nou</h2>

      {eroare ? <p className="error">{eroare}</p> : null}

       <form onSubmit={handleRegister}>
         <p>
           Prenume: <br/>
           <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
         </p>
         <p>
           Nume: <br/>
           <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
         </p>
         <p>
           Email: <br/>
           <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
         </p>
         <p>
           Parola: <br/>
           <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
         </p>
         <button type="submit">Creeaza contul</button>
       </form>
    </div>
  );
}
