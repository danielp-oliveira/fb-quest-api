import { Questao } from './questao.model';

export class Alternativa {
  constructor(
    public letra: string,
    public texto: string,
    public correta: boolean,
    public questao: Questao,
  ) {}
}
