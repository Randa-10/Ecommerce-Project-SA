// const mongoose = require("mongoose");

// const productSchema = mongoose.Schema(
// 	{
// 		en: {
// 			title: {
// 				type: String,
// 				// required: true,
// 			},
// 			description: {
// 				type: String,
// 				// required: true,
// 			},
	
// 		},
// 		ar: {
// 			title: {
// 				type: String,
// 				// required: true,
// 			},
// 			description: {
// 				type: String,
// 				// required: true,
// 			},
		
// 		},
// 		thumbnail: {
// 			type: String,
// 			// required: true,
// 		},
// 		category: {
// 			type: String,
// 			// required: true,
// 		},
// 		images: {type: Array}
//         ,
		
// 		price: {
// 			type: Number,
// 			// required: true,
// 		},
		
// 		distance:
// 		 {type: Number, default: 0},
// 		beds: {
// 			type: Number,
// 			default: 0,
// 		},
	
	
// 	},

// 	{timestamps: true}
// );
// productSchema.index({ name: "text" });


// const productModel = mongoose.model("Product", productSchema);
// module.exports = productModel;








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
