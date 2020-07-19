import * as mongoose from 'mongoose';

export const MateriaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  ativa: {
    type: Boolean,
    required: true,
    default: true,
  },
  assuntos: [
    {
      nome: {
        type: String,
      },
      ativo: {
        type: Boolean,
      },
    },
  ],
  vestibular: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vestibular',
    required: true,
  },
});
