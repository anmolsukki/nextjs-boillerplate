const getVehicleById = (req, res) => {
  res.json({ byId: req.query.id, message: 'Vehicle ID is ' + req.query.id });
};

export default getVehicleById;
