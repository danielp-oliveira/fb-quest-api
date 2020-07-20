import { Alternativa, Assunto, Materia, Vestibular } from '@/backoffice/models';

export class Questao {
  constructor(
    public nome: string,
    public numero: number,
    public resolucao: string,
    public enunciado: string,
    public ativa: boolean,
    public vestibular: Vestibular,
    public materia: Materia,
    public assunto: Assunto,
    public alternativas: Alternativa[],
  ) {}
}
