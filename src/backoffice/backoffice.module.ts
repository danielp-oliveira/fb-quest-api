import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VestibularController } from '@/backoffice/controllers';
import {
  MateriaSchema,
  QuestaoSchema,
  VestibularSchema,
} from '@/backoffice/schemas';
import { VestibularSerivce } from '@/backoffice/services';

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
