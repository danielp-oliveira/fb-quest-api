import { Assunto } from '@/backoffice/models';
import { Contract } from '@/backoffice/contracts';
import { Validator } from '@/utils/validator.util';

export class AddAssuntoContract implements Contract {
  errors: any[];

  validate(model: Assunto): boolean {
    const validator = new Validator();

    validator.hasMinLen(model.nome, 3, 'Nome inválido');

    this.errors = validator.errors;
    return validator.isValid();
  }
}
