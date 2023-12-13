const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater')

mongoose.plugin(slug)

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String },
    videoID: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
