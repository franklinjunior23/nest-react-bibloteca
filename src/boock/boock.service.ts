import { Injectable } from '@nestjs/common';
import { CreateBoockDto } from './dto/create-boock.dto';
import { UpdateBoockDto } from './dto/update-boock.dto';

@Injectable()
export class BoockService {
  create(createBoockDto: CreateBoockDto) {
    return 'This action adds a new boock';
  }

  findAll() {
    return `This action returns all boock`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boock`;
  }

  update(id: number, updateBoockDto: UpdateBoockDto) {
    return `This action updates a #${id} boock`;
  }

  remove(id: number) {
    return `This action removes a #${id} boock`;
  }
}
