import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  HttpException,
  HttpStatus,
  Param,
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
