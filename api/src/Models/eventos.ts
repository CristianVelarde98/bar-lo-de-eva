import { Document, Schema, model } from 'mongoose';

export interface IEvento extends Document {
  fecha: Date;
  idFoto: string;
}

const eventoSchema = new Schema({
  fecha: { type: Date, required: true },
  idFoto: { type: String, required: true },
});

export default model<IEvento>('Evento', eventoSchema);
