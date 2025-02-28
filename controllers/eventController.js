const Event = require("../model/event.model");

//createEvent

const createEvent = async (req, res) => {
    try {
        const newEvent = new Event({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            location: req.body.location
        });
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    }catch(err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
}



//getAllEvents

const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        events ? res.status(200).json(events) : res.json({message: "No events found"});
    }catch(err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
};

//getSingleEvent

const getSingleEvent = async (req, res) => {
    try {
        const {id} = req.params;
        const event = await Event.findById(id);
        event ? res.status(200).json(event) : res.json({message: "Event not found"});
    }catch(err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
}

//deleteEvent

const deleteEvent = async (req, res) => {
    try {
        const {id} = req.params;
        const event = await Event.findByIdAndDelete(id);
        event ? res.status(200).json({message: "Event deleted successfully"}) : res.json({message: "Event not found"});
    }catch(err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
}

//updateEvent

const updateEvent = async (req, res) => {
    try {
        const {id} = req.params;
        const event = await Event.findByIdAndUpdate(id, {
            title: req.body.title,
            description: req.body.descripton,
            date: req.body.date,
            location: req.body.location
        }, {new: true});
        event ? res.status(200).json(event) : res.json({message: "Event not found"});
    }catch(err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    createEvent,
    getAllEvents,
    getSingleEvent, 
    deleteEvent,
    updateEvent
}