import MessageModel from "../models/message.model.js";
import conversationModel from "../models/conversation.model.js";
import createError from "../utils/createError.js";

export const createNewMessage = async (req, res, next) => {
  const newMessage = new MessageModel({
    conversationId: req.body.conversationId,
    userId: req.userId,
    desc: req.body.desc,
  });
  try {
    const savedMessage = await newMessage.save();
    await conversationModel.findOneAndUpdate(
      { id: req.body.conversationId },
      {
        $set: {
          readBySeller: req.isSeller,
          readByBuyer: !req.isSeller,
          lastMessage: req.body.desc,
        },
      },
      { new: true }
    );
    res.status(201).send(savedMessage);
  } catch (err) {
    next(err);
  }
};

export const getMessages = async (req, res, next) => {
  res.send("From Message Controller");
};
