import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreateEvent from './pages/CreateEvent/CreateEvent';
import Home from './pages/Home/Home';
import EventList from './pages/EventList/EventList';

function AuthGuard({ children }: { children: React.ReactNode }) {
 const nav = useNavigate();
   useEffect(() => {
     if (!localStorage.getItem('token')) {
       nav('/login');
     }
   }, []);

    if (!localStorage.getItem('token')) {
      return null;
    }

  return <>{children}</>;
}

function Navigation() {
  const token = localStorage.getItem('token');
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    nav('/login');
  };

  return (
    <div className="nav-menu">
      <ul>
        <li><Link to="/" style={{ color: 'white' }}>Acasa</Link></li>
        <li><Link to="/events" style={{ color: 'white' }}>Evenimente</Link></li>
        
        {token ? (
          <>
             <li><Link to="/create-event" style={{ color: 'white' }}>Creaza Eveniment</Link></li>
            <li><button onClick={handleLogout}>Iesi din cont</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login" style={{ color: 'white' }}>Login</Link></li>
           <li><Link to="/register" style={{ color: 'white' }}>Inregistrare</Link></li>
          </>
        )}
      </ul>
    </div>
  );
}

function App() {
  return (
   <BrowserRouter>
      <Navigation />
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
