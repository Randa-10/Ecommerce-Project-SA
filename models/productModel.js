


const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        title: {
            type: String,
            // required: true,
        },
        category: {
            type: String,
            // required: true,
        },
        location: {
            type: String,
            // required: true,
        },
        description: {
            type: String,
            // required: true,
        },
		images: {type: Array},

		thumbnail: {
			type: String,
			// required: true,
		},
		price: {
			type: Number,
			// required: true,
		},
        distance:
		        {type: Number,
                default:124},
                beds: {
			type: Number,
            default:2
		
		},
    },
    { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;
