import express from 'express';
import ReservaControllers from '../Controller/ReservaControllers.js';

const router = express.Router();

router
  .route('/')
  .get(ReservaControllers.getReservas)       
  .post(ReservaControllers.createReserva);   


router.route('/:id')
  .get(ReservaControllers.getReservasById)  
  .put(ReservaControllers.updateReserva)    
  .delete(ReservaControllers.deletedReserva); 
  
export default router;