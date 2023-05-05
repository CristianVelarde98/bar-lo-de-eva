import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IAuth extends Document {
  user: string;
  password: string;
  validatePassword(password: string): Promise<boolean>;
}

const AuthSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: false,
    default: 'unknown',
  },
});

AuthSchema.methods.validatePassword = async function validatePassword(
  password: string
): Promise<boolean> {
  const response = await bcrypt.compare(password, this.password);
  return response;
};

export const ModelAuthSchema = model<IAuth>('auth', AuthSchema);
