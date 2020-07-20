import { Assunto, Vestibular } from '@/backoffice/models';

export class Materia {
  constructor(
    public nome: string,
    public ativa: boolean,
    public vestibular: Vestibular,
    public assuntos: Assunto[]
  ) {}
}
