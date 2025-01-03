import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // await conversation.save();
    // await newMessage.save();

    // this wil run parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    // Socket IO Functionality will go here
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage); // used to send events to specific client
    }

    res.status(201).json({ newMessage });
  } catch (err) {
    console.log("Error in Send Message Controller: ", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: useToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, useToChatId] },
    }).populate("messages");

    console.log("Messages get successfully: ");
    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;
    // console.log("Messages get successfully: ", messages);

    res.status(200).json(messages);
  } catch (err) {
    console.log("Error in get Messages Controller: ", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
