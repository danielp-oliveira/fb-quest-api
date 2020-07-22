import { Assunto } from '@/backoffice/models';

export class AddMateriaDto {
  constructor(
    public nome: string,
    public ativa: boolean,
    public vestibularId: string,
    public assuntos: Assunto[]
  ) {}
}