import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VestibularController } from './controllers/vestibular.controller';
import { MateriaSchema } from './schemas/materia.schema';
import { QuestaoSchema } from './schemas/questao.schema';
import { VestibularSchema } from './schemas/vestibular.schema';
import { VestibularSerivce } from './services/vestibular.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Vestibular',
        schema: VestibularSchema,
        collection: 'vestibulares',
      },
      { name: 'Materia', schema: MateriaSchema, collection: 'materias' },
      { name: 'Questao', schema: QuestaoSchema, collection: 'questoes' },
    ]),
  ],
  controllers: [VestibularController],
  providers: [VestibularSerivce],
})
export class BackofficeModule {}
