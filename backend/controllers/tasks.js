import Task from '../models/Task.js';
import User from '../models/User.js';

export async function listTasks(req, res) {
  try {
    const { status, priority, q } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (priority) filter.priority = priority;
    if (q) filter.title = { $regex: q, $options: 'i' };

    const tasks = await Task.find(filter)
      .populate('createdBy', 'name')
      .populate('claimedBy', 'name')
      .sort({ createdAt: -1 });

    res.json(tasks);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function createTask(req, res) {
  try {
    const { title, description, dueDate, priority } = req.body;
    if (!title?.trim()) return res.status(400).json({ message: 'Title required' });

    const task = await Task.create({
      title, description, dueDate, priority, createdBy: req.user.id
    });
    res.status(201).json(task);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function claimTask(req, res) {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (task.status !== 'Pending') {
      return res.status(400).json({ message: 'Task is not available to claim' });
    }
    task.status = 'In-progress';
    task.claimedBy = req.user.id;
    await task.save();
    res.json(task);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function completeTask(req, res) {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    const me = String(req.user.id);
    const creator = String(task.createdBy || '');
    const claimer = String(task.claimedBy || '');

    if (me !== creator && me !== claimer) {
      return res.status(403).json({ message: 'Only claimer or creator can complete' });
    }
    if (task.status === 'Completed') {
      return res.status(400).json({ message: 'Task already completed' });
    }

    task.status = 'Completed';
    await task.save();

    await User.findByIdAndUpdate(req.user.id, { $inc: { points: 1 } });
    res.json(task);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function deleteTask(req, res) {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    if (String(task.createdBy) !== String(req.user.id)) {
      return res.status(403).json({ message: 'Only the creator can delete' });
    }
    await task.deleteOne();
    res.json({ message: 'Deleted' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server error' });
  }
}
