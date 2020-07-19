import { Materia } from './materia.model';

export class Assunto {
  constructor(
    public nome: string,
    public ativo: boolean,
    public materia: Materia,
  ) {}
}
