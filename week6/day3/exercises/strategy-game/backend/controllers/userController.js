const players = {};

exports.register = (req, res) => {
  const { username } = req.body;
  if (players[username]) return res.status(400).send('User already exists');
  players[username] = { username };
  res.send({ message: 'Registered', username });
};
