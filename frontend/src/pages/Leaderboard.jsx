import { useEffect, useState } from 'react';
import api from '../utils/api';

export default function Leaderboard() {
  const [users, setUsers] = useState([]);
  useEffect(() => { api.get('/leaderboard').then(({data}) => setUsers(data)); }, []);
  return (
    <div style={{maxWidth:500, margin:'20px auto'}}>
      <h2>Leaderboard</h2>
      <ol>
        {users.map(u => (<li key={u._id}>{u.name} — {u.points} pts</li>))}
      </ol>
    </div>
  );
}
