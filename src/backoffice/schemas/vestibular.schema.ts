import * as mongoose from 'mongoose';

export const VestibularSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
    index: {
      unique: true,
    },
  },
  ativo: {
    type: Boolean,
    required: true,
    default: true,
  },
});
