const getVehicles = (req, res) => {
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'Invalid method' });
  }
  res.json({ hello: 'Word', method: req.method });
};

export default getVehicles;
