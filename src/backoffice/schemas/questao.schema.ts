import * as mongoose from 'mongoose';

export const QuestaoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
  },
  numero: {
    type: Number,
    required: true,
  },
  resolucao: {
    type: String,
    required: true,
  },
  enunciado: {
    type: String,
    required: true,
  },
  ativa: {
    type: Boolean,
    required: true,
    default: true,
  },
  vestibular: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vestibular',
    required: true,
  },
  materia: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Materia',
    required: true,
  },
  assunto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assunto',
    required: true,
  },
  alternativas: [
    {
      letra: {
        type: String,
      },
      texto: {
        type: String,
      },
      correta: {
        type: Boolean,
      },
    },
  ],
});
