const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventSchema = new Schema({
  organizer: { type: String, unique: true, maxlength: 20 },
  name: {
    type: String,
    validate: function () {
      return !this.name.includes("event");
    },
  },
  email: {
    type: String,
    validate: function ValidateEmail() {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email);
    },
  },
  image: { type: String, required: true },
  numOfSeats: Number,
  bookedSeats: Number,
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model("Event", EventSchema);
