import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
const { CREATED, OK } = StatusCodes;
import { success } from '@constants';

import otpController from '@controllers/otp';




// Constants
const router = Router();

// Paths
export const p = {
    send: '/sendotp',
    verify: '/verifyotp'
  
} as const;

/**
 *  send otp
 */
 router.post(p.send, async (req: any, res: Response) => {
    const data = await otpController.sendOtp(req.body );
    return res.status(CREATED).send({ data, code: CREATED, message: success.en.signupSuccessful });
});

/**
 *  verify otp
 */
router.post(p.verify,  async (req: Request, res: Response) => {
    const data = await otpController.verifyOtp(req.body);
    return res.status(OK).send({ data, code: OK, message: success.en.loginSuccessful });
});




// Export default
export default router;
