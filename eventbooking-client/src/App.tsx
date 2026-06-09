import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import Login from './pages/Login/Login';
import CreateEvent from './pages/CreateEvent/CreateEvent';

function Home() {
  return (
   <div className="container">
      <h1>Bun venit la EventBooking</h1>
    <p>Cea mai verde aplicatie de evenimente.</p>
   </div>
  )
}

function Register() {
  return (
    <div className="container">
      <h2>Inregistrare</h2>
     <p>Aici te inregistrezi</p>
    </div>
  )
}

function EventList() {
    return (
       <div className="container">
         <h2>Toate evenimentele</h2>
         <p>Lista o sa apara aici</p>
       </div>
    )
}

function AuthGuard({ children }: { children: React.ReactNode }) {
 const nav = useNavigate();
   useEffect(() => {
     if (!localStorage.getItem('token')) {
       nav('/login');
     }
   }, []);
  return <>{children}</>;
}

function App() {
  return (
   <BrowserRouter>
      <div style={{ backgroundColor: 'green', padding: '10px' }}>
         <ul>
           <li><Link to="/" style={{ color: 'white' }}>Acasa</Link></li>
           <li><Link to="/events" style={{ color: 'white' }}>Evenimente</Link></li>
         <li><Link to="/create-event" style={{ color: 'white' }}>Creaza Eveniment</Link></li>
           <li><Link to="/login" style={{ color: 'white' }}>Login</Link></li>
             <li><Link to="/register" style={{ color: 'white' }}>Register</Link></li>
         </ul>
      </div>

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       <Route path="/events" element={<EventList />} />
       <Route path="/create-event" element={<AuthGuard><CreateEvent /></AuthGuard>} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
