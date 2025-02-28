const express = require("express");
const router = express.Router();
const {createEvent, getAllEvents, getSingleEvent, deleteEvent, updateEvent} = require("../controllers/eventController");


router.route("/").post(createEvent);

router.route("/").get(getAllEvents);

router.route("/:id").get(getSingleEvent);

router.route("/:id").delete(deleteEvent);

router.route("/:id").post(updateEvent)



module.exports = router;