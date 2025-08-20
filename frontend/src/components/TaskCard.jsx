export default function TaskCard({ task, onClaim, onComplete }) {
  return (
    <div style={{border:'1px solid #ccc', padding:12, borderRadius:8}}>
      <h3 style={{margin:'4px 0'}}>{task.title}</h3>
      {task.description && <p>{task.description}</p>}
      <p>Status: <b>{task.status}</b> | Priority: {task.priority}</p>
      {task.dueDate && <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>}
      <p>By: {task.createdBy?.name || '—'} {task.claimedBy ? `| Claimed by: ${task.claimedBy?.name}` : ''}</p>
      <div style={{display:'flex', gap:8, marginTop:8}}>
        {task.status === 'Pending' && <button onClick={onClaim}>Claim</button>}
        {task.status !== 'Completed' && <button onClick={onComplete}>Mark Complete</button>}
      </div>
    </div>
  );
}
