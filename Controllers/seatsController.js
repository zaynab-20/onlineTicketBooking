const Seats = require("../models/seats");
const {v4:uuidv4} =require("uuid")

exports.createSeat = async (req, res) => {
    try {
  
      const createSeat = {
        id: uuidv4(),
        eventId:req.params.id,
        seatNumber:req.body.seatNumber,
        isBooked:req.body.isBooked
      };
      const seats = await Seats.create(createSeat);
  
      res.status(201).json({
        message: "Seat created successfully",
        data: seats,
      });

    } catch (error) {
        res.status(500).json({ message: "Error creating seat record", error: error.message });
      }
    };

    exports.bookedSeat = async (req, res) => {
      try {
      const {seatId} = req.body;
      if (!seatId) {
        return res.status(400).json({message:"seatId is required"});
      }
        const seat = await Seats.findByPk(req.params.id);
        if (!seat) {
          return res.status(404).json({message:"Seat not found"});
        }

       } catch (error) {

        res.status(500).json({ message: "Error creating seat record", error: error.message });
      }
    };
    
    exports.getAllSeat= async (req, res) => {
      try {
        const mySeat = await Seats.findAll();
    
        res.status(200).json({
            message: `kindly find all the seat`,
            data: mySeat,
          });
      } catch (error) {
        res.status(500).json({ message: "Error fetching seat records", error: error.message });
      }
    };
    
    exports.getSeatById = async (req, res) => {
      try {
        const oneSeat = await Seats.findByPk(req.params.id);
    
        if (!oneSeat) {
          return res.status(404).json("Seat not found");
        }
        res.status(200).json({
            message: `kindly find below seat with the above id`,
            data: oneSeat,
          });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
    
    