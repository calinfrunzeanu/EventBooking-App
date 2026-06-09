import { Link } from 'react-router';
import { authService } from '../../services/authService';
import './Home.css';

const Home: React.FC = () => {
  const isLoggedIn = authService.isAuthenticated();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Descopera &amp; Rezerva
            <span className="hero-highlight"> Evenimente Memorabile</span>
          </h1>
          <p className="hero-subtitle">
            Platforma ta completa pentru gasirea, crearea si gestionarea evenimentelor.
            De la concerte la conferinte, totul intr-un singur loc.
          </p>
          <div className="hero-actions">
            <Link to="/events" className="btn btn-primary btn-lg">
              🎯 Vezi Evenimentele
            </Link>
            {!isLoggedIn && (
              <Link to="/register" className="btn btn-outline btn-lg">
                ✨ Creeaza Cont
              </Link>
            )}
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <span className="stat-number">150+</span>
            <span className="stat-label">Evenimente</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">5K+</span>
            <span className="stat-label">Utilizatori</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">50+</span>
            <span className="stat-label">Locatii</span>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">De ce EventBooking?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Securitate Avansata</h3>
            <p>Autentificare JWT si roluri de acces pentru protectia datelor tale.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Rapid &amp; Modern</h3>
            <p>API RESTful performant cu .NET 9 si interfata React moderna.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Design Premium</h3>
            <p>Interfata eleganta cu animatii fluide si experienta utilizator de top.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
