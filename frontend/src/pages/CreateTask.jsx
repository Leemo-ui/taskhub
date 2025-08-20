import { useState } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';

export default function CreateTask() {
  const [form, setForm] = useState({ title:'', description:'', dueDate:'', priority:'Low' });
  const [err, setErr] = useState('');
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault(); setErr('');
    try {
      const payload = { ...form };
      if (!payload.dueDate) delete payload.dueDate;
      await api.post('/tasks', payload);
      nav('/');
    } catch (e) { setErr(e?.response?.data?.message || 'Failed to create'); }
  }

  return (
    <div style={{maxWidth:500, margin:'20px auto'}}>
      <h2>Create Task</h2>
      <form onSubmit={submit} style={{display:'grid', gap:8}}>
        <input placeholder="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})}/>
        <textarea placeholder="Description" value={form.description} onChange={e=>setForm({...form, description:e.target.value})}/>
        <label>Due date:
          <input type="date" value={form.dueDate} onChange={e=>setForm({...form, dueDate:e.target.value})}/>
        </label>
        <label>Priority:
          <select value={form.priority} onChange={e=>setForm({...form, priority:e.target.value})}>
            <option>Low</option><option>Medium</option><option>High</option>
          </select>
        </label>
        <button type="submit">Save</button>
        {err && <p style={{color:'red'}}>{err}</p>}
      </form>
    </div>
  );
}
