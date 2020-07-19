import { Controller } from '@nestjs/common';

@Controller()
export class VestibularController {
  get() {
    return 'Obter os vestibulares';
  }

  post() {
    return 'Criar um vestibular';
  }

  put() {
    return 'Atualizar um vestibular';
  }

  delete() {
    return 'Remover um vestibular';
  }
}