const {Events} = require("../models/events");
const {v4:uuidv4} =require("uuid")

// const fs = require('fs');




exports.createEvent = async (req, res) => {
    try {

        const date = new Date();

   const newDate = date.toLocaleDateString()


      const { eventName, venue } = req.body;
  
      const createEvent = {
        id: uuidv4(),
        eventName,
        date:newDate,
        venue
      }
      console.log(createEvent);
      
      const events = await Events.create(createEvent);
  
      res.status(201).json({
        message: "Event created successfully",
        data: events,
      });

    } catch (error) {
        res.status(500).json({ message: "Error creating event record", error: error.message });
      }
    };
    
    exports.getAllEvent = async (req, res) => {
      try {
        const myEvent = await Events.findAll();
    
        res.status(200).json({
            message: `kindly find all the events `,
            data: myEvent,
          });
      } catch (error) {
        res.status(500).json({ message: "Error fetching event records", error: error.message });
      }
    };
    
    exports.getEventById = async (req, res) => {
      try {
        const oneEvent = await Events.findByPk(req.params.id);
    
        if (!oneEvent) {
          return res.status(404).json("User not found");
        }
        res.status(200).json({
            message: `kindly find below user with the above id`,
            data: oneUser,
          });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
    
    