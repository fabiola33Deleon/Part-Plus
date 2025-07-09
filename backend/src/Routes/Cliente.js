import express from 'express';
import ClienteControllers from '../Controller/ClienteControllers.js';

const router = express.Router();

router
  .route('/')
  .get(ClienteControllers.getCliente)      
  .post(ClienteControllers.createCliente);  


router.route('/:id')
  .get(ClienteControllers.getClienteById)   
  .put(ClienteControllers.updateCliente)    
  .delete(ClienteControllers.deletedCliente); 

export default router;