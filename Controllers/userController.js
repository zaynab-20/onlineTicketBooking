const Users= require("../models/users");
const {v4:uuidv4} =require("uuid")
// const fs = require('fs');


exports.createUser = async (req, res) => {
    try {
          
        const { fullName, email } = req.body;
  
      const createUser = {
        id: uuidv4(),
        fullName,
        
        email
      };
      // console.log(createUser);
      
      const users = await Users.create(createUser);
  
      res.status(201).json({
        message: "User created successfully",
        data: users,
      });

    } catch (error) {
        res
          .status(500)
          .json({ message: "Error creating user record", error: error.message });
      }
    };
    
    exports.getAllUser = async (req, res) => {
      try {
        const myUsers = await Users.findAll();
    
        res.status(200).json({
            message: `kindly find all the users `,
            data: myUsers,
          });
      } catch (error) {
        res.status(500).json({ message: "Error fetching users records", error: error.message });
      }
    };
    
    exports.getUserById = async (req, res) => {
      try {
        const oneUser = await Users.findByPk(req.params.id);
    
        if (!oneUser) {
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
    
    exports.updateUser = async (req, res) => {
      try {
        const updateUser = await Users.findByPk(req.params.id);
    
        if (!updateUser) {
          return res.status(404).json("User not found");
        }
    
        const newUser = {
          firstName,
          lastName,
          email
        };
    
        const newUpdateUser = await newUpdateUser.update(newUser);
        res.status(200).json({ message: "user updated", data: newUpdateUser });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
    
    exports.deleteUser = async (req, res) => {
      try {
        const ticketUser= await Users.findByPk(req.params.id);
    
        if (!ticketUser) {
          return res.status(404).json("User not found");
        }
        ticketUser.destroy();
        res.status(200).json({ message: `User deleted successfully`, data: ticketUser });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
    










// const Users = require("../models");

// const { v4:uuidv4 } = require ("uuid");
// const user = require("../models/users");

// exports.createUser = async (req, res) => {
//     try {
//       const newUser = {firstName, lastName, email} = req.body
        
//       const data = await BooksTable.create(newBook);
//       console.log(data);
  
//       res
//         .status(201)
//         .json({ meassage: `new boook created successfully`, data: data });
//     } catch (error) {
//       res.status(500).json({
//         message: error.message,
//       });
//     }
//   };