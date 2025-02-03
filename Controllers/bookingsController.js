const Bookings = require("../models/bookings");
const {v4:uuidv4} =require("uuid")

// const fs = require('fs');




exports.createBooking = async (req, res) => {
    try {
  
      const createBooking = {
        id: uuidv4(),
        userId:req.body.userId,
        eventId:req.body.eventId,
        seatId:req.params.id
        
      };
      const bookings = await Bookings.create(createBooking);
  
      res.status(201).json({
        message: "booking successful",
        data: bookings,
      });

    } catch (error) {
        res.status(500).json({ message: "Error booking seat record", error: error.message });
      }
    };
    
    exports.getAllBooking= async (req, res) => {
      try {
        const bookedSeat = await Bookings.findAll();
    
        res.status(200).json({
            message: `kindly find all the booking`,
            data: bookedSeat,
          });
      } catch (error) {
        res.status(500).json({ message: "Error fetching booking records", error: error.message });
      }
    };
    
    exports.getBookedSeatById = async (req, res) => {
      try {
        const oneBooking = await Bookings.findByPk(req.params.id);
    
        if (!oneBooking) {
          return res.status(404).json("booking not found");
        }
        res.status(200).json({
            message: `kindly find below seat with the above id`,
            data: oneBooking,
          });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
    
    



// const date = new Date();

// const newDate = date.toLocaleDateString()

// {
//     date:newDate
// }