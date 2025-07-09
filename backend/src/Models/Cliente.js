import {Schema, model} from "mongoose";

const ClienteSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },

}, {
    timestamps: true,
    strict: false
})

export default model("Cliente", ClienteSchema)