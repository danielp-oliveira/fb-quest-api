import { Vestibular } from './vestibular.model';
import { Assunto } from './assunto.model';
export class Materia {
  constructor(
    public nome: string,
    public ativa: boolean,
    public vestibular: Vestibular,
  ) {}
}
