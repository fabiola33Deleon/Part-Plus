const ClienteControllers = {};
import ClienteModels from "../Models/Cliente.js";

// Función de validación de email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// validación de teléfono
const isValidPhone = (phone) => {
  const phoneRegex = /^\+?[0-9\s\-]{8,15}$/;
  return phoneRegex.test(phone);
};

// SELECT
ClienteControllers.getCliente = async (req, res) => {
  const Cliente = await ClienteModels.find();
  res.json(Cliente);
};

//SELECT BY ID
ClienteControllers.getClienteById = async (req, res) => {
  const Cliente = await ClienteModels.findById(req.params.id);
  if (!Cliente) {
    return res.status(404).json({ message: "Cliente dont find" });
  }
  res.json(Cliente);
};

// DELETE
ClienteControllers.deletedCliente = async (req, res) => {
const deletedCliente = await ClienteModels.findByIdAndDelete(req.params.id);
  if (!deletedCliente) {
    return res.status(404).json({ message: "Cliente dont find" });
  }
  res.json({ message: "Cliente deleted" });
};

// UPDATE
ClienteControllers.updateCliente  = async (req, res) => {
  // Solicito todos los valores
  const { name, email, password, phone, age   } = req.body;
  // Actualizo
  await ClienteModels.findByIdAndUpdate(
    req.params.id,
    {
       name, 
       email, 
       password, 
       phone, 
       age 
    },
    { new: true }
  );
  res.json({ message: "Cliente  update" });
};

// INSERT
ClienteControllers.createCliente = async (req, res) => {
  try {
    const { 
      name, 
      email, 
      password, 
      phone, 
      age 
    } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ 
        message: "Los campos name, email y password son obligatorios" 
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ 
        message: "Formato de email inválido" 
      });
    }

    if (phone && !isValidPhone(phone)) {
      return res.status(400).json({ 
        message: "Formato de teléfono inválido" 
      });
    }

    if (password.length < 6) {
      return res.status(400).json({ 
        message: "La contraseña debe tener al menos 6 caracteres" 
      });
    }

    if (age && (typeof age !== 'number' || age < 18 || age > 100)) {
      return res.status(400).json({ 
        message: "La edad debe ser un número válido entre 18 y 100" 
      });
    }

    // Verificar si  ya existe
    const existingCliente = await ClienteModels.findOne({ email });
    if (existingCliente) {
      return res.status(409).json({ 
        message: "Ya existe un cliente registrado con este email" 
      });
    }

    // Crear nuevo cliente
    const newCliente = new ClienteModels({
      name,
      email,
      password, 
      phone,
      age
    });

    await newCliente.save()
        res.json({message: "Saved successfully"})
    } catch (error) {
        res.status(500).json({message: "Error saving Cliente"})
    }
};
export default ClienteControllers;