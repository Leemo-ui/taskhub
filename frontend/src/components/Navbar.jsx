import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout, isAuthed } = useAuth();
  const nav = useNavigate();
  return (
    <nav style={{display:'flex',gap:12,padding:12,borderBottom:'1px solid #ddd'}}>
      <Link to="/">TaskHub</Link>
      {isAuthed && <Link to="/create">Create Task</Link>}
      {isAuthed && <Link to="/leaderboard">Leaderboard</Link>}
      {isAuthed && <Link to="/profile">Profile</Link>}
      <div style={{marginLeft:'auto'}} />
      {!isAuthed ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      ) : (
        <>
          <span>Hi, {user?.name}</span>
          <button onClick={() => { logout(); nav('/login'); }}>Logout</button>
        </>
      )}
    </nav>
  );
}
