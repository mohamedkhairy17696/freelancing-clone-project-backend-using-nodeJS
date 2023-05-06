import createError from "../utils/createError.js";
import ReviewModel from "../models/review.model.js";
import GigModel from "../models/gig.model.js";

export const createReview = async (req, res, next) => {
  if (req.isSeller) {
    return next(createError(403, "Sellers can't create review"));
  }

  const newReview = new ReviewModel({
    userId: req.userId,
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.star,
  });

  try {
    const review = await ReviewModel.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });

    if (review) {
      return next(createError(403, "You've already created review"));
    }

    const savedReview = await newReview.save();
    await GigModel.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });

    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await ReviewModel.find({ gigId: req.params.gigId }).sort({
      updatedAt: -1,
    });
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
};
