import { useState, useEffect } from 'react';
import { eventService, type EventDto } from '../../services/eventService';
import './EventList.css';

const EventList: React.FC = () => {
  const [events, setEvents] = useState<EventDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventService.getAllEvents();
        setEvents(data);
      } catch {
        setError('Eroare la incarcarea evenimentelor.');
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('ro-RO', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="events-page">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Se incarca evenimentele...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="events-page">
      <div className="events-container">
        <div className="events-header">
          <h1>🎪 Toate Evenimentele</h1>
          <p>Descopera si participa la cele mai interesante evenimente</p>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        {events.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">📭</span>
            <h2>Niciun eveniment disponibil</h2>
            <p>Revino mai tarziu sau creeaza primul eveniment!</p>
          </div>
        ) : (
          <div className="events-grid">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="event-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="event-card-header">
                  <span className="event-badge">📅 Eveniment</span>
                </div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <div className="event-meta">
                  <div className="meta-item">
                    <span className="meta-icon">📍</span>
                    <span>{event.venueName}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">🗓️</span>
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">👥</span>
                    <span>{event.capacity} locuri</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventList;
