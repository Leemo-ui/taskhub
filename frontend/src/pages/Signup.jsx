import { useState } from 'react';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ name:'', email:'', password:'' });
  const [err, setErr] = useState('');
  const { login } = useAuth();
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault(); setErr('');
    try {
      const { data } = await api.post('/auth/signup', form);
      login(data); nav('/');
    } catch (e) { setErr(e?.response?.data?.message || 'Signup failed'); }
  }

  return (
    <div style={{maxWidth:400, margin:'40px auto'}}>
      <h2>Join TaskHub</h2>
      <form onSubmit={submit} style={{display:'grid', gap:8}}>
        <input placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
        <input placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})}/>
        <button type="submit">Create account</button>
        {err && <p style={{color:'red'}}>{err}</p>}
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}
