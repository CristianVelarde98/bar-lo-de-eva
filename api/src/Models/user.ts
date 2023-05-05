import { Schema, model, Document } from 'mongoose';

export interface UserInterface extends Document {
  name: string;
  password: string;
  keyLevel: number;
  validatePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<UserInterface>({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  keyLevel: {
    type: Number,
    required: true,
  },
});

const UserModel = model<UserInterface>('User', userSchema);

export default UserModel;
