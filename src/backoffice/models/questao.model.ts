import { Alternativa } from './alternativa.model';
import { Assunto } from './assunto.model';
import { Materia } from './materia.model';
import { Vestibular } from './vestibular.model';

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
  ) {}
}
