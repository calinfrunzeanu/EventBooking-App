import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { authService } from '../../services/authService';
import './Auth.css';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!form.firstName.trim()) newErrors.firstName = 'Prenumele este obligatoriu.';
    if (!form.lastName.trim()) newErrors.lastName = 'Numele este obligatoriu.';
    if (!form.email.trim()) newErrors.email = 'Email-ul este obligatoriu.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Format email invalid.';
    if (!form.password) newErrors.password = 'Parola este obligatorie.';
    else if (form.password.length < 6) newErrors.password = 'Parola trebuie sa aiba minim 6 caractere.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) return;

    setLoading(true);
    try {
      await authService.register(form);
      navigate('/events');
    } catch (err: any) {
      setServerError(err.response?.data?.error || 'Eroare la inregistrare.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <span className="auth-icon">✨</span>
          <h1>Inregistrare</h1>
          <p>Creeaza-ti contul EventBooking</p>
        </div>

        {serverError && <div className="alert alert-error">{serverError}</div>}

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="register-firstName">Prenume</label>
              <input
                id="register-firstName"
                type="text"
                placeholder="Ion"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className={errors.firstName ? 'input-error' : ''}
              />
              {errors.firstName && <span className="field-error">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="register-lastName">Nume</label>
              <input
                id="register-lastName"
                type="text"
                placeholder="Popescu"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className={errors.lastName ? 'input-error' : ''}
              />
              {errors.lastName && <span className="field-error">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="register-email">Email</label>
            <input
              id="register-email"
              type="email"
              placeholder="exemplu@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="register-password">Parola</label>
            <input
              id="register-password"
              type="password"
              placeholder="Minim 6 caractere"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <span className="field-error">{errors.password}</span>}
          </div>

          <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
            {loading ? 'Se creeaza contul...' : 'Creeaza contul'}
          </button>
        </form>

        <p className="auth-footer">
          Ai deja cont? <Link to="/login">Autentifica-te</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
