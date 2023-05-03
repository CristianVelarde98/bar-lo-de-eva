import { Schema, Document, model } from 'mongoose';

export interface IMenu extends Document {
  nombre: string;
  descripcion: string;
  precio: number;
}

const menuSchema = new Schema<IMenu>({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
});

export default model<IMenu>('Menu', menuSchema);
