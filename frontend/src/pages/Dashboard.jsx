import { useEffect, useState } from 'react';
import api from '../utils/api';
import TaskCard from '../components/TaskCard';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({ status:'', priority:'', q:'' });

  async function load() {
    const params = {};
    if (filters.status) params.status = filters.status;
    if (filters.priority) params.priority = filters.priority;
    if (filters.q) params.q = filters.q;
    const { data } = await api.get('/tasks', { params });
    setTasks(data);
  }

  useEffect(() => { load(); }, []);
  useEffect(() => { load(); }, [filters.status, filters.priority]);

  async function claim(id) { await api.put(`/tasks/${id}/claim`); load(); }
  async function complete(id) { await api.put(`/tasks/${id}/complete`); load(); }

  return (
    <div style={{maxWidth:900, margin:'20px auto'}}>
      <h2>TaskHub Dashboard</h2>
      <div style={{display:'flex', gap:8, marginBottom:12}}>
        <select value={filters.status} onChange={e=>setFilters({...filters, status:e.target.value})}>
          <option value="">All</option>
          <option>Pending</option>
          <option>In-progress</option>
          <option>Completed</option>
        </select>
        <select value={filters.priority} onChange={e=>setFilters({...filters, priority:e.target.value})}>
          <option value="">Any priority</option>
          <option>Low</option><option>Medium</option><option>High</option>
        </select>
        <input placeholder="Search title..." value={filters.q}
               onChange={e=>setFilters({...filters, q:e.target.value})}
               onKeyDown={(e)=> e.key==='Enter' && load() } />
        <button onClick={load}>Search</button>
      </div>

      <div style={{display:'grid', gap:12}}>
        {tasks.map(t => (
          <TaskCard key={t._id} task={t}
            onClaim={() => claim(t._id)}
            onComplete={() => complete(t._id)} />
        ))}
        {tasks.length === 0 && <p>No tasks yet.</p>}
      </div>
    </div>
  );
}
