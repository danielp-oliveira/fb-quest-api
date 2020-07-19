import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

@Controller('v1/vestibulares')
export class VestibularController {
  @Get('admin')
  get() {
    return 'Obter os vestibulares';
  }

  @Get('admin/:id')
  getById(@Param('id') id) {
    return 'Obter o vestibular ' + id;
  }

  @Post('admin')
  post(@Body() body) {
    return body;
  }

  @Put('admin/:id')
  put(@Param('id') id, @Body() body) {
    return {
      vestibular: id,
      data: body
    };
  }

  @Delete('admin/:id')
  delete(@Param('id') id) {
    return 'Remover o vestibular ' + id;
  }
}