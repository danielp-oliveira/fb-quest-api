import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VestibularController } from './controllers/vestibular.controller';
import { MateriaSchema } from './schemas/materia.schema';
import { QuestaoSchema } from './schemas/questao.schema';
import { VestibularSchema } from './schemas/vestibular.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Vestibular', schema: VestibularSchema },
      { name: 'Materia', schema: MateriaSchema },
      { name: 'Questao', schema: QuestaoSchema },
    ]),
  ],
  controllers: [VestibularController],
})
export class BackofficeModule {}
