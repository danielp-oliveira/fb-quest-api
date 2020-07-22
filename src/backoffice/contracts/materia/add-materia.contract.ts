import { Validator } from '@/utils/validator.util';
import { Materia } from '@/backoffice/models';
import { Contract } from '@/backoffice/contracts';

export class AddMateriaContract implements Contract {
  errors: any[];

  validate(model: Materia): boolean {
    const validator = new Validator();

    validator.hasMinLen(model.nome, 3, 'Nome inválido');

    this.errors = validator.errors;
    return validator.isValid();
  }
}
