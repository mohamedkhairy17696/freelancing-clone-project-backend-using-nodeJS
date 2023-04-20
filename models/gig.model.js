import mongoose from "mongoose";
const { Schema } = mongoose;

const GigSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    totalStars: {
      type: Number,
      default: 0,
    },
    starNumber: {
      type: Number,
      default: 0,
    },
    catId: {
      type: String,
      required: true,
    },
    catTitle: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    imageSlide1: {
      type: String,
      required: false,
    },
    imageSlide2: {
      type: String,
      required: false,
    },
    imageSlide3: {
      type: String,
      required: false,
    },
    userId: {
      type: String,
      required: true,
    },
    shortTitle: {
      type: String,
      required: true,
    },
    shortDesc: {
      type: String,
      required: true,
    },
    deliveryTime: {
      type: Number,
      required: true,
    },
    revisionNumber: {
      type: Number,
      required: true,
    },
    feature1: {
      type: String,
      required: false,
    },
    feature2: {
      type: String,
      required: false,
    },
    feature3: {
      type: String,
      required: false,
    },
    feature4: {
      type: String,
      required: false,
    },
    sales: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Gig", GigSchema);
