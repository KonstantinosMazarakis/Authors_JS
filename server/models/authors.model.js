const mongoose = require('mongoose');

const AuthorstSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name cannot be empty"],
            minlength: [3, "Name has to be at least 3 characters long"]
        },
    },
    { timestamps: true }
);



const Authors = mongoose.model("Authors", AuthorstSchema)

module.exports = Authors


