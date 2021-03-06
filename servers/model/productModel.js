import mongoose from "mongoose";
const {
  ObjectId
} = mongoose.Schema;
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 80,
  },
  description: {
    type: String,
    required: true,
    maxLength: 2000,
  },
  price: {
    type: Number,
    required: true,
    maxLength: 32,
  },
  sale: {
    type: Number,
    maxLength: 32,
    default: 0
  },
  category: {
    type: ObjectId,
    ref: "Category",
    required: true,
  },
  quantity: {
    type: Number,
  },
  sold: {
    type: Number,
    default: 0,
  },
  photo: {
    type: String,
  },
  album: {
    type: Array,
  },
  status: {
    type: String,
  },
  namePhoto:{type:String}
}, {
  timestamps: true,
});

module.exports = mongoose.model("Product", ProductSchema);