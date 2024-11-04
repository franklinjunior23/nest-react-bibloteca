import { PartialType } from '@nestjs/mapped-types';
import { CreateBoockDto } from './create-boock.dto';

export class UpdateBoockDto extends PartialType(CreateBoockDto) {}
