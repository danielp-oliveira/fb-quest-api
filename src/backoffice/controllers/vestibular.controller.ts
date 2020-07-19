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

@Controller('v1/vestibulares')
export class VestibularController {
  @Get('admin')
  get() {
    return 'Obter os vestibulares';
  }

  @Get('admin/:id')
  getById(@Param('id') id: string) {
    return 'Obter o vestibular ' + id;
  }

  @Post('admin')
  post(@Body() body: Vestibular) {
    return body;
  }

  @Put('admin/:id')
  put(@Param('id') id, @Body() body: Vestibular) {
    return {
      vestibular: id,
      data: body,
    };
  }

  @Delete('admin/:id')
  delete(@Param('id') id: string) {
    return 'Remover o vestibular ' + id;
  }
}
