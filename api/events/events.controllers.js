const Event = require("../../database/models/Event");

exports.eventList = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
    console.log("Successful event listing");
  } catch (error) {
    console.log("we caught the error accountList ", error);
    res.status(500).json(error);
  }
};

exports.eventDetail = async (req, res) => {
  const { eventId } = req.params;

  try {
    const foundEvent = await Event.findById(eventId);
    if (foundEvent) {
      res.status(200).json(foundEvent);
      console.log("Successful event detail");
    } else {
      res.status(404).json({ message: "Account not found" });
      console.log("Event not found");
    }
  } catch (error) {
    console.log("we caught an error in event detail ", error);
    res.status(500).json(error);
  }
};

exports.eventCreate = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent);
    console.log("Successful event creation");
  } catch (error) {
    console.log("we caught the error in eventCreate ", error);
    res.status(500).json(error);
  }
};

exports.eventUpdate = async (req, res) => {
  const { eventId } = req.params;

  try {
    const foundEvent = await Event.findById(eventId);
    if (foundEvent) {
      await Event.findByIdAndUpdate(eventId, req.body);
      res.status(204).end();
      console.log("Successful event update");
    } else {
      res.status(404).json({ message: "Account not found" });
      console.log("Event not found");
    }
  } catch (error) {
    console.log("We caught an error in eventUpdate");
  }
};

exports.eventDelete = async (req, res) => {
  const { eventId } = req.params;

  try {
    const foundEvent = await Event.findById(eventId);
    if (foundEvent) {
      await foundEvent.remove();
      res.status(204).end();
      console.log("Successful event Delete");
    } else {
      res.status(404).json({ message: "Account not found" });
      console.log("Event not found");
    }
  } catch (error) {
    console.log("We caught an error in eventUpdate");
    res.status(500).json(error);
  }
};

exports.fullEvents = async (req, res) => {
  console.log("I got in here");
  try {
    //I cant solve it with mongoose
    //const events = await Event.find().where("numOfSeats").equals(Event);
    let events = await Event.find();
    events = events.filter((event) => {
      return event.numOfSeats === event.bookedSeats;
    });
    res.status(200).json(events);
    console.log("Successful full event listing");
  } catch (error) {
    console.log("we caught error in fullEvents", error);
    res.status(500).json(error);
  }
};
