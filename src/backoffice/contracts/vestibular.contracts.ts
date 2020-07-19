import { Validator } from '../../utils/validator.util';
import { Contract } from './contract';
import { Vestibular } from '../models/vestibular.model';

export class CreateVestibularContract implements Contract {
  errors: any[];

  validate(model: Vestibular): boolean {
    const validator = new Validator();

    validator.hasMinLen(model.nome, 3, 'Nome inválido');

    this.errors = validator.errors;
    return validator.isValid();
  }
}
