const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, },
    attending: { type: Boolean, required: true },
    dish: {
        category: { type: String },
        name: { type: String, required: true, default: "none" },
    }
}, { timestamps: true }
)
const User = mongoose.model("User", userSchema)
module.exports = User
