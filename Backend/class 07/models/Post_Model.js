const { Schema, default: mongoose } = require("mongoose");

const Post = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post_Schema = mongoose.model("posts", Post);

module.exports = Post_Schema;
