const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  medias: [{ type: String }],
  sold: Boolean,
  area: Number,
  front: Number,
  location: {
    plot_number: Number,
    colony: String,
    pincode: Number,
    landmark: String,
  },
});

module.exports = mongoose.model('home', homeSchema);
