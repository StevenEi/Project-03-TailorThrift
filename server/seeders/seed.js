const db = require('../config/connection');
const { Tech } = require('../models');

const techData = require('./userData.json');

db.once('open', async () => {
  await User.deleteMany({});

  const outfits = await User.insertMany(techData);

  process.exit(0);
});