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
import { AddVestibularContract } from '@/backoffice/contracts';
import { Vestibular } from '@/backoffice/models';
import { MakeOkResultDto, MakeErrorResultDto } from '@/backoffice/helpers';
import { VestibularSerivce } from '@/backoffice/services';

@Controller('v1/vestibulares')
export class VestibularController {
  constructor(private readonly vestibularService: VestibularSerivce) {}

  @Get('admin')
  async get() {
    try {
      const vestibulares = await this.vestibularService.get();
      return MakeOkResultDto(null, vestibulares);
    } catch (error) {
      throw new HttpException(
        MakeErrorResultDto('Não foi obter os vestibulares', error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('admin/:id')
  async getById(@Param('id') id: string) {
    try {
      const vestibular = await this.vestibularService.getById(id);
      return MakeOkResultDto(null, vestibular);
    } catch (error) {
      throw new HttpException(
        MakeErrorResultDto('Não foi obter o vestibular', error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('admin')
  @UseInterceptors(new ValidatorInterceptor(new AddVestibularContract()))
  async post(@Body() model: Vestibular): Promise<any> {
    try {
      const vestibular = await this.vestibularService.create(model);
      return MakeOkResultDto('Vestibular criado com sucesso!', vestibular);
    } catch (error) {
      throw new HttpException(
        MakeErrorResultDto('Não foi possível cadastrar o vestibular', error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Put('admin/:id')
  @UseInterceptors(new ValidatorInterceptor(new AddVestibularContract()))
  async put(@Param('id') id, @Body() model: Vestibular) {
    try {
      const vestibular = await this.vestibularService.update(id, model);
      return MakeOkResultDto('Vestibular atualizado com sucesso!', vestibular);
    } catch (error) {
      throw new HttpException(
        MakeErrorResultDto('Não foi possível atualizar o vestibular', error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('admin/:id')
  async delete(@Param('id') id: string) {
    try {
      const vestibular = await this.vestibularService.delete(id);
      return MakeOkResultDto('Vestibular removido com sucesso!', vestibular);
    } catch (error) {
      throw new HttpException(
        MakeErrorResultDto('Não foi possível remover o vestibular', error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
