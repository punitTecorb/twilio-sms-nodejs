import { Router } from 'express';
import otpRouter from './otp';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/otp', otpRouter);

// Export default.
export default baseRouter;
