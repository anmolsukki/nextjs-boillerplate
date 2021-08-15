const getAllPeople = (req, res) => {
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'Invalid method' });
  }
  res.json([{ name: 'Anmol' }, { name: 'Anurag' }]);
};

export default getAllPeople;
