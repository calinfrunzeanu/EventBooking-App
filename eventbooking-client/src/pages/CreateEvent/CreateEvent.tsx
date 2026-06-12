import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import api from '../../services/api';

export default function CreateEvent() {
  const [title, setTitle] = useState('');
   const [date, setDate] = useState('');
  const [capacity, setCapacity] = useState('');
  const [venueId, setVenueId] = useState('');
  const [venues, setVenues] = useState<any[]>([]);
    const [eroare, setEroare] = useState('');
  const nav = useNavigate();

  useEffect(() => {
    const fetchVenues = async () => {
        try {
            const res = await api.get('/venues');
            setVenues(res.data);
        } catch (e) {
            console.log(e);
        }
    };
    fetchVenues();
  }, []);

  const handleSave = async (e: any) => {
    e.preventDefault();
      setEroare('');

     if (title == '') {
        setEroare('Ai uitat titlul');
      return;
     }
    if (date == '') {
       setEroare('Pune data');
     return;
    }
     if (capacity == '') {
      setEroare('Pune un numar la capacitate');
      return;
     }
      if (venueId == '') {
        setEroare('Alege o locatie');
        return;
      }

    try {
      await api.post('/events', {
        title: title,
        description: 'Descriere simpla',
        date: date,
        capacity: parseInt(capacity),
        venueId: parseInt(venueId)
      });

      nav('/events');
    } catch (err) {
       setEroare('Eroare la salvare. Esti admin sau conexiune esuata?');
    }
  };

  return (
    <div className="container">
      <h2>Adauga un eveniment nou</h2>

      {eroare != '' && <p className="error">{eroare}</p>}

       <form onSubmit={handleSave}>
         <p>
           Titlu: <br/>
           <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
         </p>
         <p>
           Data: <br/>
           <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} />
         </p>
         <p>
           Locuri: <br/>
           <input type="number" value={capacity} onChange={e => setCapacity(e.target.value)} />
         </p>
         <p>
           Locatie: <br/>
           <select value={venueId} onChange={e => setVenueId(e.target.value)}>
             <option value="">Alege</option>
             {venues.map(v => (
               <option key={v.id} value={v.id}>{v.name}</option>
             ))}
           </select>
         </p>
         <button type="submit">Gata salveaza</button>
       </form>
    </div>
  );
}
