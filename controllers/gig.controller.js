import createError from "../utils/createError.js";
import GigModel from "../models/gig.model.js";

export const createNewGig = async (req, res, next) => {
  if (!req.isSeller) {
    return next(createError(403, "Only sellers can create a gig"));
  }
  const newGig = new GigModel({
    userId: req.userId, // userId that comes from jwt
    ...req.body,
  });
  try {
    const createdGig = await newGig.save();
    res.status(201).json(createdGig);
  } catch (err) {
    next(err);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const foundedgig = await GigModel.findById(req.params.id);
    if (foundedgig.userId !== req.userId) {
      return next(createError(403, "You can delete only your gig"));
    }

    await GigModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Gig has been deleted");
  } catch (err) {
    next(err);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const foundedgig = await GigModel.findById(req.params.id);
    if (!foundedgig) {
      next(createError(404, "Gig not found!"));
    }
    res.status(200).json(foundedgig);
  } catch (err) {
    next(err);
  }
};

export const getGigs = async (req, res, next) => {
  const query = req.query;
  const filters = {
    ...(query.userId && { userId: query.userId }),
    ...(query.catId && { catId: query.catId }),
    ...(query.cat && { cat: query.cat }),
    ...((query.min || query.max) && {
      price: {
        ...(query.min && { $gt: query.min }),
        ...(query.max && { $lt: query.max }),
      },
    }),
    ...(query.search && { title: { $regex: query.search, $options: "i" } }),
  };
  try {
    const foundedGigs = await GigModel.find(filters).sort({ [query.sort]: -1 });
    res.status(200).send(foundedGigs);
  } catch (err) {
    next(err);
  }
};
