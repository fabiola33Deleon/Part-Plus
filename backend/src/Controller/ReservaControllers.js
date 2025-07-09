const ReservaControllers = {};
import ReservaModels from "../Models/Reserva.js";

// SELECT
ReservaControllers.getReservas = async (req, res) => {
  const Reserva = await ReservaModels.find();
  res.json(Reserva);
};

//SELECT BY ID
ReservaControllers.getReservasById = async (req, res) => {
  const Reserva = await ReservaModels.findById(req.params.id);
  if (!Reserva) {
    return res.status(404).json({ message: "Reserva dont find" });
  }
  res.json(Reserva);
};


// INSERT
ReservaControllers.createReserva = async (req, res) => {
  const { idClientes, vehicle, service, status } = req.body;
  const newReservas = new ReservaModels({ idClientes, vehicle, service, status});
  await newReservas.save();
  res.json({ message: "Reserva save" });
};

// DELETE
ReservaControllers.deletedReserva  = async (req, res) => {
const deletedReserva  = await ReservaModels.findByIdAndDelete(req.params.id);
  if (!deletedReserva) {
    return res.status(404).json({ message: "Reserva dont find" });
  }
  res.json({ message: "Reserva deleted" });
};

// UPDATE
ReservaControllers.updateReserva  = async (req, res) => {
  // Solicito todos los valores
  const { idClientes, vehicle, service, status  } = req.body;
  // Actualizo
  await ReservaModels.findByIdAndUpdate(
    req.params.id,
    {
        idClientes, 
        vehicle, 
        service,
        status
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "Reserva  update" });
};

export default ReservaControllers;