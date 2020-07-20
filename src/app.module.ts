import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackofficeModule } from '@/backoffice/backoffice.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useCreateIndex: true,
    }),
    BackofficeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
