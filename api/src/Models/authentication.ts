/* eslint-disable no-shadow */
import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IAuth extends Document {
  nickname: string;
  password: string;
  rol: string;
  encryptPassword(password: string): Promise<string>;
  validatePassword(password: string): Promise<boolean>;
}

enum UserRoles {
  ADMIN = 'admin',
  SUPER_ADMIN = 'superAdmin',
  UNKNOWN = 'unknown',
}

const AuthSchema = new Schema({
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    enum: Object.values(UserRoles),
    required: false,
    default: 'unknown',
  },
});

AuthSchema.methods.encryptPassword = async function encryptPassword(
  password: string
): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  const encrypt = await bcrypt.hash(password, salt);
  return encrypt;
};

AuthSchema.methods.validatePassword = async function validatePassword(
  password: string
): Promise<boolean> {
  const response = await bcrypt.compare(password, this.password);
  return response;
};

export const ModelAuthSchema = model<IAuth>('auth', AuthSchema);
