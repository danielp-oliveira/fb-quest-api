import { Materia } from '@/backoffice/models';

export class Assunto {
  constructor(
    public nome: string,
    public ativo: boolean,
    public materia: Materia,
  ) {}
}
