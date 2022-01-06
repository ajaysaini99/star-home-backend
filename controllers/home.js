const mongoose = require('mongoose');

const Home = mongoose.model('home');

const getHomes = async (req, res) => {
  try {
    const homes = await Home.find({});
    res.status(200).send(homes);
  } catch (error) {
    res.status(500).send(error);
  }
};

const addHome = async (req, res) => {
  const homeData = req.body;
  try {
    const updateHomeData = await Home.create(homeData);
    res.status(201).send(updateHomeData);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateHome = async (req, res) => {
  const homeId = mongoose.Types.ObjectId(req.body._id);
  const query = { _id: homeId };
  const homeData = req.body;
  try {
    const updatedHome = await Home.updateOne(query, homeData);

    res.status(200).send(updatedHome);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getHomes, addHome, updateHome };
