import { Document, model, Schema } from 'mongoose';

export interface IRegistro extends Document {
  cambio: string;
  usuario: string;
  fecha: Date;
}

const registroSchema = new Schema({
  cambio: { type: String, required: true },
  usuario: { type: String, required: true },
  fecha: { type: Date, required: true, default: Date.now },
});

export default model<IRegistro>('Registro', registroSchema);
