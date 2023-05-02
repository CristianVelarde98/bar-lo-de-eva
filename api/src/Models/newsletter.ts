import { Schema, Document, model } from 'mongoose';

export interface INewsletter extends Document {
  gmail: string;
}

const newsletterSchema = new Schema<INewsletter>({
  gmail: {
    type: String,
    required: true,
    unique: true,
  },
});

export default model<INewsletter>('Newsletter', newsletterSchema);
