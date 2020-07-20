import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { ValidatorInterceptor } from '@/interceptors';
import { CreateVestibularContract } from '@/backoffice/contracts';
import { Vestibular } from '@/backoffice/models';
import { MakeOkResultDto } from '@/backoffice/helpers';
import { VestibularSerivce } from '@/backoffice/services';

@Controller('v1/vestibulares')
export class VestibularController {
  constructor(private readonly vestibularService: VestibularSerivce) {}

  @Get('admin')
  get() {
    return MakeOkResultDto(null, []);
  }

  @Get('admin/:id')
  getById(@Param('id') id: string) {
    return MakeOkResultDto(null, {});
  }

  @Post('admin')
  @UseInterceptors(new ValidatorInterceptor(new CreateVestibularContract()))
  async post(@Body() model: Vestibular): Promise<any> {
    const vestibular = await this.vestibularService.create(
      new Vestibular(model.nome, model.ativo),
    );
    return MakeOkResultDto('Vestibular criado com sucesso!', vestibular);
  }

  @Put('admin/:id')
  put(@Param('id') id, @Body() body: Vestibular) {
    return MakeOkResultDto('Vestibular atualizado com sucesso!', body);
  }

  @Delete('admin/:id')
  delete(@Param('id') id: string) {
    return MakeOkResultDto('Vestibular removido com sucesso!', null);
  }
}
