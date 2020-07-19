import { Module } from '@nestjs/common';
import { VestibularController } from './controllers/vestibular.controller';

@Module({
  controllers: [VestibularController]
})
export class BackofficeModule {}
