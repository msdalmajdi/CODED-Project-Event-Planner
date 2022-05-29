const express = require("express");
const router = express.Router();

const {
  eventList,
  eventDetail,
  eventCreate,
  eventUpdate,
  eventDelete,
  fullEvents,
} = require("./events.controllers");

router.get("/", eventList);

router.get("/full", fullEvents);
router.get("/:eventId", eventDetail);
router.post("/", eventCreate);
router.put("/:eventId", eventUpdate);
router.delete("/:eventId", eventDelete);

module.exports = router;
