const {Schema, model} = require("mongoose")

const phonesSchema = new Schema({
    name: {
        type: String,
    },
    manufacturer: {
        type: String,
    },
    description: {
        type: String,
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
    },
    imageFileName: {
        type: String,
    },
    screen: {
        type: String,
    },
    processor: {
        type: String,
    },
    ram: {
        type: Number,
    }

})

const PhonesModel = model("phones", phonesSchema)

module.exports = PhonesModel