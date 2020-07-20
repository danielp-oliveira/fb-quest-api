import { Questao } from '@/backoffice/models';

export class Alternativa {
  constructor(
    public letra: string,
    public texto: string,
    public correta: boolean,
    public questao: Questao,
  ) {}
}
