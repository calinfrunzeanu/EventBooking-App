import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [eroare, setEroare] = useState('');
   const nav = useNavigate();

  const handleLogin = async (e: any) => {
   e.preventDefault();
   setEroare('');

     if (email == '') {
       setEroare('Pune email');
        return;
     }
    if (password == '') {
       setEroare('Pune parola');
     return;
    }

   try {
     const res = await fetch('http://localhost:5198/api/auth/login', {
       method: 'POST',
      headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ email, password })
     });

      if (!res.ok) {
        setEroare('Date gresite');
        return;
      }

      const data = await res.json();
      localStorage.setItem('token', data.token);
      nav('/events');
   } catch (err) {
      setEroare('Eroare de la server');
   }
  };

  return (
    <div className="container">
      <h2>Logare in cont</h2>
      
      {eroare != '' ? <p className="error">{eroare}</p> : null}

       <form onSubmit={handleLogin}>
        <div>
        <label>Email: </label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
         <br/>
        <div>
         <label>Parola: </label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <br/>
        <button type="submit">Intra</button>
       </form>
    </div>
  );
}
