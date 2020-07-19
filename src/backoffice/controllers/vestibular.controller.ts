import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Vestibular } from '../models/vestibular.model';
import { Result } from '../models/result.model';

@Controller('v1/vestibulares')
export class VestibularController {
  @Get('admin')
  get() {
    return new Result(null, true, [], null);
  }

  @Get('admin/:id')
  getById(@Param('id') id: string) {
    return new Result(null, true, {}, null);
  }

  @Post('admin')
  post(@Body() body: Vestibular) {
    return new Result('Vestibular criado com sucesso!', true, body, null);
  }

  @Put('admin/:id')
  put(@Param('id') id, @Body() body: Vestibular) {
    return new Result('Vestibular atualizado com sucesso!', true, body, null);
  }

  @Delete('admin/:id')
  delete(@Param('id') id: string) {
    return new Result('Vestibular removido com sucesso!', true, null, null);
  }
}
