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
import { AddMateriaContract } from '@/backoffice/contracts';
import { Materia } from '@/backoffice/models';
import { MakeOkResultDto, MakeErrorResultDto } from '@/backoffice/helpers';
import { MateriaService } from '@/backoffice/services';

@Controller('v1/materias')
export class MateriaController {
  constructor(private readonly materiaService: MateriaService) {}

  @Post('admin')
  @UseInterceptors(new ValidatorInterceptor(new AddMateriaContract()))
  async post(@Body() model: Materia): Promise<any> {
    try {
      const materia = await this.materiaService.create(model);
      return MakeOkResultDto('Materia criada com sucesso!', materia);
    } catch (error) {
      throw new HttpException(
        MakeErrorResultDto('Não foi possível cadastrar a materia', error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
