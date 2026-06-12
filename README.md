# Event Booking App 🎟️

O aplicatie web Full-Stack pentru gestiunea evenimentelor si a locatiilor, construita cu .NET Web API si React. Proiect realizat pentru cursul de Proiectarea Aplicatiilor Web (DAW).

## 🛠️ Tehnologii Folosite
* **Backend:** C#, ASP.NET Core Web API, Entity Framework Core, SQL Server, JWT Auth.
* **Frontend:** React, TypeScript, Vite, React Router, Axios.

## ✨ Functionalitati
* **Sistem de conturi:** Inregistrare si Autentificare bazata pe JWT.
* **Roluri:** Protectie pe rute (Admin / User).
* **Gestiune Evenimente:** Creare, editare, stergere si vizualizare evenimente (CRUD complet).
* **Gestionare Erori:** Middleware global pentru prinderea exceptiilor pe backend.

## 🚀 Cum sa rulezi proiectul local

### Cerinte:
* [.NET 8 SDK](https://dotnet.microsoft.com/)
* [Node.js](https://nodejs.org/) (v18+)
* SQL Server Express / LocalDB

### Pasul 1: Pornirea Backend-ului
Deschideti un terminal in folderul radacina (unde se afla fisierul `.sln` sau `.csproj`) si rulati:
```bash
# Aplicarea migrarilor pentru crearea bazei de date
dotnet ef database update

# Pornirea serverului API
dotnet run
```
*Nota: API-ul va porni pe `http://localhost:5198` (verificati portul afisat in terminal).*

### Pasul 2: Pornirea Frontend-ului
Deschideti un nou terminal si navigati in folderul de client:
```bash
cd eventbooking-client
npm install
npm run dev
```

## 🔑 Conturi de Test (Seed Data)
Baza de date este populata automat cu un cont de administrator la prima rulare:
* **Email Admin:** `admin@eventbooking.com`
* **Parola:** `Admin123!`

## 📸 Capturi de ecran
*(Aici adaugi 1-2 imagini cu aplicatia ta)*
