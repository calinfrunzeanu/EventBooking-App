import { Link, useNavigate } from 'react-router';
import { authService } from '../services/authService';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();
  const isLoggedIn = authService.isAuthenticated();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🎪</span>
          <span className="brand-text">EventBooking</span>
        </Link>

        <div className="navbar-links">
          <Link to="/" className="nav-link">Acasa</Link>
          <Link to="/events" className="nav-link">Evenimente</Link>

          {isLoggedIn ? (
            <>
              <Link to="/create-event" className="nav-link nav-link-accent">
                + Creaza Eveniment
              </Link>
              <div className="nav-user">
                <span className="nav-user-email">{user?.email}</span>
                {user?.roles?.includes('Admin') && (
                  <span className="nav-badge">Admin</span>
                )}
                <button onClick={handleLogout} className="btn-logout">
                  Deconectare
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Autentificare</Link>
              <Link to="/register" className="nav-link nav-link-primary">
                Inregistrare
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
