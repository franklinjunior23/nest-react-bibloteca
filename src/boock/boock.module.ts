import { Module } from '@nestjs/common';
import { BoockService } from './boock.service';
import { BoockController } from './boock.controller';

@Module({
  controllers: [BoockController],
  providers: [BoockService],
})
export class BoockModule {}
