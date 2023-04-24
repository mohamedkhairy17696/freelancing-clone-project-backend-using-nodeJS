import mongoose from "mongoose";
const { Schema } = mongoose;

const GigSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
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
    cat: {
      type: String,
      required: true,
    },
    catImage: {
      type: String,
      required: false,
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
      required: true,
    },
    imageSlide2: {
      type: String,
      required: true,
    },
    imageSlide3: {
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
      required: true,
    },
    feature2: {
      type: String,
      required: true,
    },
    feature3: {
      type: String,
      required: true,
    },
    feature4: {
      type: String,
      required: true,
    },
    sales: {
      type: Number,
      default: 0,
    },
    catId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Cat",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Gig", GigSchema);
