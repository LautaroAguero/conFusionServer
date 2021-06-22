const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-currency").loadType(mongoose);


const LeaderSchema = new Schema (
    {
        name: {
            type: String,
            require: true,
            unique: true,
        },
        image: {
            type: String,
            require: true,
        },
        designation: {
            type: String,
            require: true,
        },
        abbr: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        featured: {
            type: Boolean,
            default: false,
        }
    }
)

var Leaders = mongoose.model("Leader", LeaderSchema);

module.exports = Leaders;