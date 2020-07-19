import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('v1/vestibulares')
export class VestibularController {
  @Get()
  get() {
    return 'Obter os vestibulares';
  }

  @Post()
  post() {
    return 'Criar um vestibular';
  }

  @Put()
  put() {
    return 'Atualizar um vestibular';
  }

  @Delete()
  delete() {
    return 'Remover um vestibular';
  }
}