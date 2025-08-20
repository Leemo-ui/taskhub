import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();
  return (
    <div style={{maxWidth:500, margin:'20px auto'}}>
      <h2>Your Profile</h2>
      <p><b>Name:</b> {user?.name}</p>
      <p><b>Email:</b> {user?.email}</p>
      <p><b>Points:</b> {user?.points ?? 0}</p>
    </div>
  );
}
