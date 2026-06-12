import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function EventList() {
    const [events, setEvents] = useState<any[]>([]);
    const [eroare, setEroare] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await api.get('/events');
                setEvents(res.data);
            } catch (e) {
                setEroare('Nu se pot incarca evenimentele');
            }
        };
        fetchEvents();
    }, []);

    return (
       <div className="container" style={{ maxWidth: '800px' }}>
         <h2>Toate evenimentele</h2>
         <p>Aici gasesti tot ce te intereseaza.</p>
         
         {eroare ? <p className="error">{eroare}</p> : null}

         <div className="event-grid">
           {events.map((e: any) => (
              <div key={e.id} className="event-card">
                  <h3>{e.title}</h3>
                  <p style={{ marginBottom: '1rem' }}>{e.description}</p>
                  <div className="event-meta">
                    <span>📅 Data: {new Date(e.date).toLocaleString()}</span>
                    <span>📍 Locatie: {e.venueName}</span>
                  </div>
              </div>
           ))}
         </div>
       </div>
    )
}
