const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

const CommentSchema = new Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const dishSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    label: {
      type: String,
      dafault: "",
    },
    price: {
      type: Currency,
      require: true,
      min: 0,
    },
    features: {
      type: Boolean,
      default: false,
    },
    comments: [CommentSchema],
  },
  { timestamps: true }
);

var Dishes = mongoose.model("Dish", dishSchema);

module.exports = Dishes;
