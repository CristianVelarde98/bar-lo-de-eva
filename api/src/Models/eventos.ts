import { Document, Schema, model } from 'mongoose';

export interface IEvento extends Document {
  inicio: Date;
  fin: Date;
  imagen: string;
}

const eventoSchema = new Schema({
  inicio: { type: Date, required: true },
  fin: { type: Date, required: true },
  imagen: { type: String, required: true },
});

export default model<IEvento>('Evento', eventoSchema);
