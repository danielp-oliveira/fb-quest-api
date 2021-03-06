import { AddMateriaDto } from '@/backoffice/dtos';
import { Contract } from '@/backoffice/contracts';
import { Validator } from '@/utils/validator.util';

export class AddMateriaContract implements Contract {
  errors: any[];

  validate(model: AddMateriaDto): boolean {
    const validator = new Validator();

    validator.hasMinLen(model.nome, 3, 'Nome inválido');

    this.errors = validator.errors;
    return validator.isValid();
  }
}
