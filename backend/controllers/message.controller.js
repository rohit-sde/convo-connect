import Conversation from "../models/conversation.model.js";

export const sendMessage = async (res, req) => {
  try {
    const { message } = req.body;
    const { id } = req.params;
    const senderId = req.user._id;

    let conversation = new Conversation.findone({
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

    await conversation.save();
    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    console.log("Error in Send Message Controller: ", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
