import { Schema, model } from 'mongoose';

interface otp {
  
    phoneNumber: string;
    countryCode: string;
    pin: number;
  
    isActive: boolean;
    isDelete: boolean;

}

const schema = new Schema<otp>({
   
    phoneNumber: { type: String, required: true },
    countryCode: { type: String, required: true, default: '+91' },
    pin: { type: Number, required: true},
    isActive: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },

}, {
    timestamps: true,
    versionKey: false
});

const otpModel = model<otp>('otps', schema);
export = otpModel