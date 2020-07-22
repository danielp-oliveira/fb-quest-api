import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  HttpException,
  HttpStatus,
  Param,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { ValidatorInterceptor } from '@/interceptors';
import { AddAssuntoContract, AddMateriaContract } from '@/backoffice/contracts';
import { AddMateriaDto } from '@/backoffice/dtos';
import { MakeOkResultDto, MakeErrorResultDto } from '@/backoffice/helpers';
import { Materia, Assunto } from '@/backoffice/models';
import { MateriaService, VestibularSerivce } from '@/backoffice/services';

@Controller('v1/materias')
export class MateriaController {
  constructor(
    private readonly materiaService: MateriaService,
    private readonly vestibularService: VestibularSerivce,
  ) {}

  @Get('admin')
  async get() {
    try {
      const materias = await this.materiaService.get();
      return MakeOkResultDto(null, materias);
    } catch (error) {
      throw new HttpException(
        MakeErrorResultDto('Não foi obter as materias', error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('admin/:id')
  async getById(@Param('id') id: string) {
    try {
      const materia = await this.materiaService.getById(id);
      return MakeOkResultDto(null, materia);
    } catch (error) {
      throw new HttpException(
        MakeErrorResultDto('Não foi obter a materia', error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('admin')
  @UseInterceptors(new ValidatorInterceptor(new AddMateriaContract()))
  async post(@Body() model: AddMateriaDto): Promise<any> {
    try {
      const vestibular = await this.vestibularService.getById(
        model.vestibularId,
      );
      const materia = await this.materiaService.create(
        new Materia(model.nome, model.ativa, vestibular, []),
      );
      return MakeOkResultDto('Materia criada com sucesso!', materia);
    } catch (error) {
      throw new HttpException(
        MakeErrorResultDto('Não foi possível cadastrar a materia', error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Put('admin/:id')
  @UseInterceptors(new ValidatorInterceptor(new AddMateriaContract()))
  async put(@Param('id') id, @Body() model: Materia) {
    try {
      const materia = await this.materiaService.update(id, model);
      return MakeOkResultDto('Materia atualizada com sucesso!', materia);
    } catch (error) {
      throw new HttpException(
        MakeErrorResultDto('Não foi possível atualizar a materia', error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('admin/:id')
  async delete(@Param('id') id: string) {
    try {
      const materia = await this.materiaService.delete(id);
      return MakeOkResultDto('Materia removida com sucesso!', materia);
    } catch (error) {
      throw new HttpException(
        MakeErrorResultDto('Não foi possível remover a materia', error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post(':id/assuntos/admin')
  @UseInterceptors(new ValidatorInterceptor(new AddAssuntoContract()))
  async saveOrUpdateAssunto(
    @Param('id') id: string,
    @Body() model: Assunto,
  ): Promise<any> {
    try {
      const materia = await this.materiaService.saveOrUpdateAssunto(id, model);
      return MakeOkResultDto('Assunto criado com sucesso!', materia);
    } catch (error) {
      throw new HttpException(
        MakeErrorResultDto('Não foi possível cadastrar o assunto', error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
