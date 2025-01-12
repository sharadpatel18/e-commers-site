const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemContent: {
    type: String,
    required: true,
  },
  itemPrice: {
    type: Number,
    required: true,
  },
  itemCatagory: {
    type: String,
    required: true,
  },
  itemStoke: {
    type: Number,
    required: true,
    min: 0,
  },
  itemImage: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  reviews: {
    type: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          min: 1,
          max: 5,
        },
        comment: {
          type: String,
          maxlength: 500,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    default: [],
  },
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRatings: {
    type: Number,
    default: 0,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
