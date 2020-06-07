const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    State: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    Cases: {
        type: Number,
    },
    Deaths: {
        type: Number,
    },
    DeathRate: {
        type: Number,
    }, Recoveries: {
        type: Number,
    }, RecoveredRate: {
        type: Number,
    }
})

const dataModel= mongoose.model('Data',dataSchema)

module.exports= dataModel
