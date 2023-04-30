import { Document, model, Schema } from 'mongoose';

export interface IPublicidad extends Document {
  mensaje: string;
  imagenId: string;
}

const publicidadSchema = new Schema({
  mensaje: { type: String, required: true },
  imagenId: { type: String, required: true },
});

export default model<IPublicidad>('Publicidad', publicidadSchema);
