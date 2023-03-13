import { CustomError ,} from "@utils/errors";
import { sendSms ,randomNumber } from '@utils/helpers';
import StatusCodes from "http-status-codes";
import { errors } from "@constants";
import {otpModel } from "@models/index";




function sendOtp(body: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const { phoneNumber } = body;
        const pin = randomNumber();
    
        await otpModel.updateOne(
          { phoneNumber: phoneNumber},
          { pin },
          { upsert: true }
        );
        const messageObj=`This  otp to verify account ${pin}`
        await sendSms(phoneNumber,messageObj)
      
        resolve({otpSend: true });
      } catch (err) {
        console.log(err);
        reject( new CustomError(errors.en.somethingBad, StatusCodes.UNAUTHORIZED));
      }
    });
  }
  
  function verifyOtp(body: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
          const {pin,phoneNumber}=body
          const pinData:any = await otpModel.findOne({phoneNumber:phoneNumber , isDelete:false})
          if(pinData){
            resolve({otp: pinData.otp , phoneNumber:pinData.phoneNumber });
          }else{
            reject( new CustomError(errors.en.noDatafound, StatusCodes.UNAUTHORIZED));
          }
       
      } catch (err) {
        reject(err);
      }
    });
  }









// Export default
export default {
    sendOtp,
    verifyOtp

} as const;
