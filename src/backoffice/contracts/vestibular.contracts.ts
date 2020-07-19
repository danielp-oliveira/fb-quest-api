import { Validation } from '../utils/validation.util';
import { Contract } from './contract';
import { Vestibular } from '../models/vestibular.model';

export class CreateVestibularContract implements Contract {
  errors: any[];

  validate(model: Vestibular): boolean {
    const validation = new Validation();

    validation.hasMinLen(model.nome, 3, 'Nome inválido');

    this.errors = validation.errors;
    return validation.isValid();
  }
}
