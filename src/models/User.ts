import mongoose, { Schema, model } from 'mongoose';

export interface User extends mongoose.Document {
  nombre: string;
  apellido: string;
  edad: number;
}

const userSchema = new Schema({
  nombre: String,
  apellido: { type: String, required: true },
  edad: Number,
});

export default model<User>('User', userSchema);
