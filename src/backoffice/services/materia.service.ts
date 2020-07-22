import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Materia, Assunto } from '@/backoffice/models';

@Injectable()
export class MateriaService {
  constructor(@InjectModel('Materia') private readonly model: Model<Materia>) {}

  async getById(id: string): Promise<Materia> {
    const materia = this.model.findById(id).exec();
    return materia;
  }

  async create(data: Materia): Promise<Materia> {
    const materia = this.model(data);
    return await materia.save();
  }

  async saveOrUpdateAssunto(id: string, data: Assunto): Model<Materia> {
    const options = { upsert: true, new: true };
    return await this.model.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          assuntos: data,
        },
      },
      options,
    );
  }
}
