import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseInterceptors,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ValidatorInterceptor } from '@/interceptors';
import { CreateVestibularContract } from '@/backoffice/contracts';
import { Vestibular } from '@/backoffice/models';
import { ResultDto } from '@/backoffice/dtos';
import { VestibularSerivce } from '@/backoffice/services';

@Controller('v1/vestibulares')
export class VestibularController {
  constructor(private readonly vestibularService: VestibularSerivce) {}

  @Get('admin')
  get() {
    return new ResultDto(null, true, [], null);
  }

  @Get('admin/:id')
  getById(@Param('id') id: string) {
    return new ResultDto(null, true, {}, null);
  }

  @Post('admin')
  @UseInterceptors(new ValidatorInterceptor(new CreateVestibularContract()))
  async post(@Body() model: Vestibular) {
    const vestibular = await this.vestibularService.create(
      new Vestibular(model.nome, model.ativo),
    );
    return new ResultDto(
      'Vestibular criado com sucesso!',
      true,
      vestibular,
      null,
    );
  }

  @Put('admin/:id')
  put(@Param('id') id, @Body() body: Vestibular) {
    return new ResultDto(
      'Vestibular atualizado com sucesso!',
      true,
      body,
      null,
    );
  }

  @Delete('admin/:id')
  delete(@Param('id') id: string) {
    return new ResultDto('Vestibular removido com sucesso!', true, null, null);
  }
}
