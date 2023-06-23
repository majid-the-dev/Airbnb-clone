const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required: true,}, 
    place: {type: mongoose.Schema.Types.ObjectId, required: true,  ref:'Place'}, //in this case, Place is the name of a model we want to reference i.e. it will try to grab the ID and try to find in the Place model, a place object matching that ID
    checkIn: {type: Date, required: true},
    checkOut: {type: Date, required: true},
    name: {type: String, required: true},
    phone: {type: String, required: true},
    price: Number
});

const BookingModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingModel;