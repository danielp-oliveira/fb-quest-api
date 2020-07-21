import { Validator } from '@/utils/validator.util';
import { Vestibular } from '@/backoffice/models/vestibular.model';
import { Contract } from './contract';

export class AddVestibularContract implements Contract {
  errors: any[];

  validate(model: Vestibular): boolean {
    const validator = new Validator();

    validator.hasMinLen(model.nome, 3, 'Nome inválido');

    this.errors = validator.errors;
    return validator.isValid();
  }
}
