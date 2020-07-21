import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vestibular } from '@/backoffice/models';

@Injectable()
export class VestibularSerivce {
  constructor(
    @InjectModel('Vestibular') private readonly model: Model<Vestibular>,
  ) {}

  async get(): Promise<Vestibular[]> {
    const vestibulares = this.model.find().exec();
    return vestibulares;
  }

  async getById(id: string): Promise<Vestibular> {
    const vestibular = this.model.findById(id).exec();
    return vestibular;
  }

  async create(data: Vestibular): Promise<Vestibular> {
    const vestibular = this.model(data);
    return await vestibular.save();
  }

  async update(id: string, data: Vestibular): Promise<Vestibular> {
    return await this.model.findOneAndUpdate({ _id: id }, data);
  }

  async delete(id: string): Promise<Vestibular> {
    return await this.model.findOneAndDelete({ _id: id });
  }
}
