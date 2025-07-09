import {Schema, model} from "mongoose";

const ReservaSchema = new Schema({
    idClientes: {
        type: Schema.Types.ObjectId,
        ref: "Cliente",
        require: true
    },
    vehicle: {
        type: String,
        require: true
    },
    service: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    
}, {
    timestamps: true,
    strict: false
})

export default model("Reserva", ReservaSchema)