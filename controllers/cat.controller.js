import createError from "../utils/createError.js";
import CatModel from "../models/cat.model.js";

export const createNewCat = async (req, res, next) => {
  const newCat = new CatModel({
    ...req.body,
  });
  try {
    const createdCat = await newCat.save();
    res.status(201).json(createdCat);
  } catch (err) {
    next(err);
  }
};

export const deleteCat = async (req, res, next) => {
  try {
    await CatModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Cat has been deleted");
  } catch (err) {
    next(err);
  }
};

export const getCat = async (req, res, next) => {
  try {
    const foundedCat = await CatModel.findById(req.params.id);
    if (!foundedCat) {
      next(createError(404, "Cat not found!"));
    }
    res.status(200).json(foundedCat);
  } catch (err) {
    next(err);
  }
};

export const getCats = async (req, res, next) => {
  const query = req.query;
  const filters = {
    ...(query.search && { title: { $regex: query.search, $options: "i" } }),
  };
  try {
    const foundedCats = await CatModel.find(filters).sort({ [query.sort]: -1 });
    res.status(200).send(foundedCats);
  } catch (err) {
    next(err);
  }
};
