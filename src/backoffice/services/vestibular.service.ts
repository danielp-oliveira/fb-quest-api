import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vestibular } from '../models/vestibular.model';

@Injectable()
export class VestibularSerivce {
  constructor(
    @InjectModel('Vestibular') private readonly model: Model<Vestibular>,
  ) {}

  create(data: Vestibular): Promise<Vestibular> {
    const vestibular = this.model(data);
    return vestibular.save();
  }
}
