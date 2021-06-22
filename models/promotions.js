const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

const PromotionSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        Image: {
            type: String,
            require: true,
        },
        label: {
            type: String,
            default: "",
        },
        price: {
            type: Currency,
            require: true,
            min: 0,
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
);

var Promotions = mongoose.model("Promotion", PromotionSchema);

module.exports = Promotions;