import { Link } from 'react-router';

export default function Home() {
  return (
   <div className="container" style={{ textAlign: 'center', marginTop: '4rem', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Descopera & Rezerva Evenimente</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
        Cea mai simpla platforma verde pentru bilete si spectacole.
      </p>
      
      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
        <Link to="/events" style={{ textDecoration: 'none' }}>
          <button type="submit" style={{ margin: 0, padding: '1rem 2rem' }}>Vezi Evenimentele</button>
        </Link>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: 'white', color: 'var(--pine-green)', border: '2px solid var(--pine-green)', padding: '1rem 2rem', borderRadius: '8px', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 600 }}>Creeaza Cont</button>
        </Link>
      </div>
   </div>
  )
}
