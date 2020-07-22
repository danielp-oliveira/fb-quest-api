import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Materia } from '@/backoffice/models';

@Injectable()
export class MateriaService {
  constructor(@InjectModel('Materia') private readonly model: Model<Materia>) {}

  async create(data: Materia): Promise<Materia> {
    const materia = this.model(data);
    return await materia.save();
  }
}
