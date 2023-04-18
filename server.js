import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import conversationRoute from "./routes/conversation.route.js";
import gigRoute from "./routes/gig.route.js";
import messageRoute from "./routes/message.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import catRoute from "./routes/cat.route.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log("Connected to mongo DB");
  } catch (error) {
    console.log(error);
  }
};

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/cats", catRoute);
app.use("/api/messages", messageRoute);
app.use("/api/orders", orderRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8888, () => {
  connect();
  console.log("Backend server is running!");
});
