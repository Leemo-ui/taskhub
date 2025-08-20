import User from '../models/User.js';

export async function topUsers(_req, res) {
  try {
    const users = await User.find().select('name points').sort({ points: -1, name: 1 }).limit(20);
    res.json(users);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server error' });
  }
}
